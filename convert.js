const { existsSync, rmSync, readFileSync } = require("fs");
const { join } = require("path");
const sharp = require("sharp");

const imagePath = process.argv[process.argv.length - 1];
if (typeof imagePath !== "string" || !existsSync(imagePath)) {
  throw new Error(`Image path "${imagePath}" not found!`);
}

const characterName = imagePath.split(".")[0];
if (typeof characterName !== "string" || !/[a-z0-9\-]/g.test(characterName)) {
  throw new Error(
    `Character name "${characterName}" is not valid (a-z 0-9 - only).`
  );
}

const buffer = readFileSync(imagePath);

sharp(buffer)
  .resize(128, 128)
  .webp()
  .toFile(join(__dirname, "public", "icons", `${characterName}.webp`))
  .then(() => {
    rmSync(imagePath);

    console.log(
      `Converted character icon for "${characterName}" and removed input file.`
    );
  })
  .catch((error) => {
    console.error(`Failed converting file: ${error}`);
  });
