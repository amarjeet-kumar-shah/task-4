document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('taskInput').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
          addTask();
      }
  });
});

function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');

  if (taskInput.value.trim() === '') {
      alert('Please enter a task.');
      return;
  }

  var li = document.createElement('li');
  li.innerHTML = taskInput.value + ' <button class="delete-btn" onclick="removeTask(this)">Delete</button>';
  li.classList.add('fade-in');
  taskList.appendChild(li);

  taskInput.value = '';
}

function removeTask(button) {
  var li = button.parentNode;
  li.classList.add('fade-out');
  setTimeout(function () {
      li.parentNode.removeChild(li);
  }, 500); // Delay removal to allow for fade-out animation
}