const gameEngine = new GameEngine();
const ASSET_MANAGER = new AssetManager();

// load the dragon sprite
ASSET_MANAGER.queueDownload("./sprites/FlyDragon.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.init(ctx);

	gameEngine.addEntity(new Dragon(gameEngine));

	gameEngine.start();
});