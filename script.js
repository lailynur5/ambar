document.addEventListener("DOMContentLoaded", loadKas);

const form = document.getElementById("kasForm");
const tabel = document.getElementById("tabelKas");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const jumlah = document.getElementById("jumlah").value;
    const tanggal = new Date().toLocaleString("id-ID");

    const data = { nama, jumlah, tanggal };

    let kas = JSON.parse(localStorage.getItem("kas_asrama")) || [];
    kas.push(data);
    localStorage.setItem("kas_asrama", JSON.stringify(kas));

    form.reset();
    loadKas();
});

function loadKas() {
    tabel.innerHTML = "";
    const kas = JSON.parse(localStorage.getItem("kas_asrama")) || [];

    kas.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.nama}</td>
            <td>Rp ${Number(item.jumlah).toLocaleString("id-ID")}</td>
            <td>${item.tanggal}</td>
        `;
        tabel.appendChild(row);
    });
}
