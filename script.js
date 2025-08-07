document.getElementById('faculty-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const department = document.getElementById('department').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!name || !department || !email) return;

  const tableBody = document.querySelector('#faculty-table tbody');

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${name}</td>
    <td>${department}</td>
    <td>${email}</td>
    <td><button onclick="deleteRow(this)">Delete</button></td>
  `;

  tableBody.appendChild(row);

  document.getElementById('faculty-form').reset();
});

function deleteRow(button) {
  const row = button.closest('tr');
  row.remove();
}
