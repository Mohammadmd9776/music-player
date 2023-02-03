import { v4 as uuidv4 } from "uuid";

 export function musicData() {
  return [
    {
      name: "Dreaming",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/12/b48463b9b5a0351cc2f34b31fcee6185fdb03bb5-1024x1024.jpg",
      artist: "El Train",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=49425",
      color: ["FCF8EE", "CE2E2B"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Early Rise",
      cover: "https://chillhop.com/wp-content/uploads/2022/09/8c2eab8525ace609b0c68b7564eb085d2244ee09-1024x1024.jpg",
      artist: "illiterate, Mr Slipz",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=48087",
      color: ["FCF8EE", "CE2E2B"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Moving on",
      cover: "https://chillhop.com/wp-content/uploads/2022/10/0b99c64a1316ecfb990c546ba4a73f6de27cfde5-1024x1024.jpg",
      artist: "Nymano, Suuna",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=45154",
      color: ["FCF8EE", "CE2E2B"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "The Loveliest Dream",
      cover: "https://chillhop.com/wp-content/uploads/2022/10/8b7ba4cdad98f47e0411cfe94c50cce4a68cb848-1024x1024.jpg",
      artist: "Sofasound",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=45155",
      color: ["FCF8EE", "CE2E2B"],
      id: uuidv4(),
      active: false,
    },
  ];
}
