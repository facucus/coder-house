const fs = require("fs");

class Archivo {
  constructor(fileName) {
    this.fileName = fileName;
  }

  async leerArchivo() {
    try {
      const productos = await fs.promises.readFile(`./${this.fileName}`);
      return JSON.parse(productos.toString("utf-8"));
    } catch (error) {
      return [];
    }
  }

  async leer() {
    console.log("lala: ", await this.leerArchivo());
  }
  async guardar(title, price, thumbnail) {
    const productos = await this.leerArchivo();
    const newProduct = {
      id: productos.length + 1,
      title,
      price,
      thumbnail,
    };
    try {
      await fs.promises.writeFile(
        `./${this.fileName}`,
        JSON.stringify([...productos, newProduct])
      );
    } catch (error) {
      console.log(error);
    }
  }

  async borrar() {
    fs.unlink(`./${this.fileName}`, (error) => {
      if (error) {
        console.log(
          `hubo un error al intentar borrar el archivo: ${this.fileName}`
        );
      } else {
        console.log("borrado!");
      }
    });
  }
}

const test = new Archivo("productos.txt");
test.leer();
test.guardar("My title1", 555, "lkjaa.jpg");
// test.borrar();
