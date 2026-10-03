function Button() {
  function clickHandler(nama) {
    console.log(`saya diklik oleh ${nama}`);
  }
  // Kalau pakai () di functionnya ketika dipanggil maka akan otomatis dirender
  // () dipakai ketika ada parameter yang dikirimkan
  // Atau cukup pakai arrow function juga bisa
  return <button onClick={() => clickHandler("Budi")}>Klik Saya</button>;
}

export default Button;
