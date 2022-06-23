//Read data from localStorage tasks list
export const readLocalStorage = () => {

	//Get localStorage item
	let localTasks = localStorage.getItem('tasks');

	//If there is no item
	if( localTasks === null ){
		//Create an empty item
		localStorage.setItem('tasks', '[]');
		//Retry this functions
		return readLocalStorage();
	}

	//Turn item value from string into an object
	localTasks = JSON.parse(localTasks);

	//Return object
	return localTasks;
};


//Save data to localStorage tasks list
export const saveLocalStorage = (newTasksList) => {
	//Update localStorage item tasks list
	return localStorage.setItem('tasks', JSON.stringify( newTasksList ));
};


//Remove data from localStorage tasks list
export const deleteTaskLocalStorage = (index) => {

	//Fetch tasks list
	let list = [...getItems()];

	list.splice( index, 1 );

	saveLocalStorage(list);

	return list;
};


//Check task
export const checkTaskLocalStorage = (index) => {
	let list = [...getItems()];

	list[index].isChecked = !list[index].isChecked;

	saveLocalStorage(list);

	return list;
};





//LOCAL USE ONLY
//Fetch data from localStorage returned as an array of objects
const getItems = () => {
	return JSON.parse(localStorage.getItem('tasks'));
}