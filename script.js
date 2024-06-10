document.addEventListener("DOMContentLoaded", function() {
    const folderNav = document.getElementById("folder-nav");
    const pdfList = document.getElementById("pdf-list");
    const pdfViewer = document.getElementById("pdf-viewer");

    // Simulación de carpetas y PDFs (esto luego será dinámico)
    const folders = [
        { name: "Carpeta 1", pdfs: ["pdfs/ejemplo1.pdf", "pdfs/ejemplo2.pdf"] },
        { name: "Carpeta 2", pdfs: ["pdfs/ejemplo3.pdf", "pdfs/ejemplo4.pdf"] }
    ];

    folders.forEach(folder => {
        const folderLink = document.createElement("a");
        folderLink.href = "#";
        folderLink.textContent = folder.name;
        folderLink.addEventListener("click", () => {
            pdfList.innerHTML = "";
            folder.pdfs.forEach(pdf => {
                const pdfLink = document.createElement("a");
                pdfLink.href = "#";
                pdfLink.textContent = pdf.split("/").pop(); // Mostrar solo el nombre del archivo
                pdfLink.addEventListener("click", () => {
                    pdfViewer.src = pdf;
                });
                pdfList.appendChild(pdfLink);
                pdfList.appendChild(document.createElement("br"));
            });
        });
        folderNav.appendChild(folderLink);
        folderNav.appendChild(document.createElement("br"));
    });
});
