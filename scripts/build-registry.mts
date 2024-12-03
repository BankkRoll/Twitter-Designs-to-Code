import { Registry, registrySchema } from "../registry/schema";

import chalk from "chalk";
import { promises as fs } from "fs";
import ora from "ora";
import path from "path";
import { rimraf } from "rimraf";
import { ui } from "../registry/registry-ui";

const REGISTRY_PATH = path.join(process.cwd(), "public/r");
const UI_PATH = path.join(REGISTRY_PATH, "ui");

async function buildRegistry() {
  const spinner = ora("Starting registry build...").start();

  try {
    spinner.text = "Validating registry schema...";
    const result = registrySchema.safeParse(ui);
    if (!result.success) {
      spinner.fail(chalk.redBright("❌ Registry validation failed!"));
      console.error(chalk.red(result.error));
      process.exit(1);
    }
    spinner.succeed(chalk.greenBright("✔ Registry schema validated!"));

    spinner.text = "Clearing old registry files...";
    rimraf.sync(REGISTRY_PATH);
    await fs.mkdir(REGISTRY_PATH, { recursive: true });
    await fs.mkdir(UI_PATH, { recursive: true });
    spinner.succeed(chalk.greenBright("✔ Old registry files cleared!"));

    const formattedUIEntries: Registry = [];

    for (const uiEntry of result.data) {
      const entrySpinner = ora(
        `Processing: ${chalk.blue(uiEntry.name)}...`
      ).start();
      const uiFilePath = path.join(UI_PATH, `${uiEntry.name}.json`);

      try {
        const loadedFiles = await Promise.all(
          uiEntry.files.map(async (file) => {
            const filePath = path.resolve(process.cwd(), file.content);
            entrySpinner.text = `Loading file: ${chalk.yellow(filePath)}...`;
            const fileContent = await fs.readFile(filePath, "utf-8");
            return {
              ...file,
              content: fileContent.trim(),
            };
          })
        );

        const formattedUI = {
          ...uiEntry,
          files: loadedFiles,
        };

        formattedUIEntries.push(formattedUI);

        await fs.writeFile(
          uiFilePath,
          JSON.stringify(formattedUI, null, 2),
          "utf8"
        );
        entrySpinner.succeed(
          chalk.greenBright(`✔ Processed: ${chalk.blue(uiEntry.name)}`)
        );
      } catch (error) {
        entrySpinner.fail(
          chalk.redBright(`❌ Error processing: ${uiEntry.name}`)
        );
        console.error(chalk.red(error));
        process.exit(1);
      }
    }

    spinner.text = "Writing master metadata file...";
    const metadataPath = path.join(REGISTRY_PATH, "ui.json");
    await fs.writeFile(
      metadataPath,
      JSON.stringify(formattedUIEntries, null, 2),
      "utf8"
    );
    spinner.succeed(chalk.greenBright("✔ Master metadata file written!"));

    spinner.succeed(chalk.greenBright("✅ Registry build complete!"));
  } catch (err) {
    spinner.fail(chalk.redBright("❌ Registry build failed!"));
    console.error(chalk.red(err));
    process.exit(1);
  }
}

buildRegistry().catch((err) => {
  console.error(chalk.redBright(err));
  process.exit(1);
});
