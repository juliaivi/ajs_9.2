import getBuffer from './getBuffer';

export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = getBuffer(buffer);
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    return String.fromCharCode(...bufferView);
    // Второй вариант
    //   let str = '';
    //   for (let i = 0; i < bufferView.length; i++) {
    //     str += String.fromCharCode(bufferView[i]);
    //   }

  //   return str;
  }
}
