// import Mood from "./Mood";

import Button from "./Button";

// Konsep hampir sama kayak vue ada komponen komponen
function App() {
  return (
    <>
      {/* hari disini adalah properties untuk dikirim ke componen lain */}
      {/* <Mood hari="Senin" mood="Sad" />
      <Mood hari="Selasa" mood="Angry" /> */}
      {/* Data tadi dikirim lewat props */}
      <Button />
    </>
  );
}

export default App;
