const documents = [
  { filename: "Accreditation by IRA 15 MARCH 2024.pdf", url: "assets/Accreditation by IRA 15 MARCH 2024.pdf" },
  { filename: "AICL License - Investigation and Consultancy - 2025.pdf", url: "assets/AICL License - Investigation and Consultancy - 2025.pdf" },
  { filename: "IGP Letter.pdf", url: "assets/IGP Letter.pdf" },
  { filename: "IRA Surveyors Licence 2024 to 2025.pdf", url: "assets/IRA Surveyors Licence 2024 to 2025.pdf" }
];

const grid = document.getElementById("documentsGrid");

documents.forEach(doc => {
  const link = document.createElement("a");
  link.href = doc.url;
  link.target = "_blank"; // opens in new tab
  link.className = "card";

  let content;
  if (doc.filename.endsWith(".pdf")) {
    content = `<iframe src="${doc.url}#view=FitH&toolbar=0&navpanes=0"></iframe>`;
  } else {
    content = `<img src="${doc.url}" />`;
  }

  link.innerHTML = content + `<div class="overlay">${doc.filename}</div>`;
  grid.appendChild(link);
});


