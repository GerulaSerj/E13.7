const path = require('path');

module.exports = {
  entry: './src/index.js', // Ваш главный файл, с которого начинается сборка проекта
  output: {
    path: path.resolve(__dirname, 'dist'), // Путь для сохранения собранного проекта
    filename: 'bundle.js', // Имя файла собранного проекта
    devServer: {
        hot: true,
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
      ],
  },
};
