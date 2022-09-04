// delete element
const list = document.querySelector('ul');

list.addEventListener('click', function(event) {
    if(event.target.className ==='delete'){
        const li = event.target.parentElement;
        list.removeChild(li);
    }
})

// add new element
const forms = document.forms
const addForm = forms['add-book'];

addForm.addEventListener('submit', function(e){
e.preventDefault();

const value = addForm.querySelector('input[type="text"]').value;
const li = document.createElement('li')
const bookName = document.createElement('span')
const deleteBtn = document.createElement('button')

bookName.textContent = value;
deleteBtn.textContent = 'Delete'

bookName.classList.add('name')
deleteBtn.classList.add('Delete')

li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);
});



// search
function search() { 
let input = document.getElementById("search_book");
let filter = input.value.toUpperCase();
let ul = document.getElementById("list_book")
let li = ul.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("span")[0];
        let txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
