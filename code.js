const input=document.getElementById("text")
const area=document.getElementById("list")
const notes=[]

function render(){
	for(var i=0;i<notes.length;i++){
		area.insertAdjacentHTML('beforeend',note(notes[i], i))
	}
}

function field(){
	if (input.value.length === 0) {
		return;
	}
	area.insertAdjacentHTML('beforeend',note(input.value, notes.length))
	notes.push(input.value)
	console.log(notes)
	input.value=""
}

function note(title, index){
	return `<li class="list-group-item d-flex justify-content-between align-items-center md-2">
		<span>${title}</span>
		<span>
			<span class="btn btn-small btn-primary" onclick="deleteNote(${index})">-</span>
		</span>
	</li>`
}

function deleteNote(index){
	notes.splice(index, 1);
	area.innerHTML = "";
	render();
}
