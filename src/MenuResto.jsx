// Untuk import CSS sesuai komponen yang dibuat
// import "./MenuResto.css";

function MenuResto() {
  // Cara lain untuk styling di react js
  const styleMenuItem = {
    backgroundColor: "#333",
    padding: "10px",
    color: "#fff",
    borderRadius: "10px",
    marginBottom: "5px",
  };

  //   const isMakanan = true;

  const menu = [
    { nama: "Nasi Bakar", harga: "Rp10.000" },
    { nama: "Mie Ayam", harga: "Rp15.000" },
    { nama: "Ramen", harga: "Rp17.000" },
    { nama: "Ayam goreng", harga: "Rp8.000" },
  ];
  return (
    // Fragment untuk memasukkan 2 div dalam 1 komponen
    // cara pakai css di react pakai className
    <>
      {menu.map((item, index) => {
        return (
          <div style={styleMenuItem} key={index}>
            <div>
              <b>Nama Menu : </b>
              <em>{item.nama}</em>
            </div>
            <div>
              <b>Harga Menu : </b>
              <em>{item.harga}</em>
            </div>
            {/* Ternary operator bisa juga pakai && jika false maka secara otomatis tidak tampil */}
            {/* {isMakanan == true ? <div>Tipe: Makanan</div> : <div>Tipe: Minuman</div>} */}
          </div>
        );
      })}
    </>
  );
}

export default MenuResto;
