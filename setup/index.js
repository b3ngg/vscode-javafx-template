const fs = require('fs');
const path = require('path');
const projectRoot = path.join(__dirname, '..');

const javafxPath = process.env.fx_path;

const settingsJSON = JSON.parse(
  fs.readFileSync(path.join(projectRoot, '/.vscode/settings.json'), 'utf8')
);

settingsJSON['java.project.referencedLibraries'] = Object.assign(
  settingsJSON['java.project.referencedLibraries'],
  [
    'lib/**/*.jar',
    javafxPath + '/javafx-swt.jar',
    javafxPath + '/javafx.base.jar',
    javafxPath + '/javafx.controls.jar',
    javafxPath + '/javafx.fxml.jar',
    javafxPath + '/javafx.graphics.jar',
    javafxPath + '/javafx.media.jar',
    javafxPath + '/javafx.swing.jar',
    javafxPath + '/javafx.web.jar',
  ]
);

fs.writeFileSync(
  path.join(projectRoot, '/.vscode/settings.json'),
  JSON.stringify(settingsJSON, null, '  ')
);

// Remove the script
fs.unlinkSync(path.join(__filename));

// Check for Mac's DS_store file, and if it's the only one left remove it
const remainingFiles = fs.readdirSync(path.join(__dirname));
if (remainingFiles.length === 1 && remainingFiles[0] === '.DS_store') {
  fs.unlinkSync(path.join(__dirname, '.DS_store'));
}

// Check if the scripts folder is empty
if (fs.readdirSync(path.join(__dirname)).length === 0) {
  // Remove the scripts folder
  fs.rmdirSync(path.join(__dirname));
}
