# Start experimenting with JavaFX right away!

This template is made for directly writing small sandbox programs with JavaFX in Visual Studio Code.

## Features

- Java development without build tool problems in VSCode
- Loading and opening SceneBuilder files
- Setup script for linking the correct packages in the project
- Ready configured launch script
- Debug Java in VSCode
- Extensions recommendations

## Who is the template for?

People who are forced to work with Java and use GUI in small sandbox projects. But don't want to use horrible SDKs like Swing for that and at the same time don't want to leave their comfort in VSCode.

## Who is the template not for?

People who seriously want to write whole programs in Java and export them as well. They should rather struggle with some build tool.

## Get started

1. Makes sure, you have Java installed
2. [Download JavaFX](https://gluonhq.com/products/javafx/) and extract it somewhere safe
3. Create a environment variable called `$PATH_TO_FX` for your path to your JavaFX `lib` folder

   e.g. on linux/mac

   ```bash
   export PATH_TO_FX=path/to/javafx-sdk-15.0.1/lib
   ```

4. Clone the template (in your projects folder)
   ```bash
   git clone https://github.com/b3ngg/vscode-javafx-template.git my_app
   ```
5. Navigate into your new app
   ```bash
   cd my_app
   ```
6. Run the setup script to automatically link the SDKs
   ```bash
   fx_path=$PATH_TO_FX node setup
   ```
7. Open the project in VSCode
   ```bash
   code .
   ```
8. (Optional) Install recommended extensions
9. Possibly wait a few seconds for the extensions to settle down to life. You may have to reload the window the first time.
10. Press `F5` to launch your application

**You can now write your application inside the `src` directory and edit the `scene.fxml` with the [SceneBuilder](https://gluonhq.com/products/scene-builder/).**
