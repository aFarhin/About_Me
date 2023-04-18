const messages = [
  'Hello! I am Ahmeda Farhin 🙋‍♀️',
  'I am a Frontend Web developer 👩‍💻',
  'Pursuing Fullstack Web Development course in Acciojob 📝',
  'My Technical Skills: HTML,CSS, JavaScript,Java 💻',
  'I was an assistant teacher in High School 👩‍🏫',
  'Hobbies: Painting, Book reading, Photography, Videography  🎨 📸 📚',
  'Passion: Coding, Teaching 💻 👩‍🏫'
];



const images = [
  'https://images.gr-assets.com/users/1578802777p6/48940197.jpg',
  'https://user-images.githubusercontent.com/59734313/157189039-c09b3e38-9f42-42c0-ab54-14f1574190a7.gif',
  'https://www.wingstechsolutions.com/wp-content/uploads/2022/03/full-stack-development.gif',
  'https://media.tenor.com/sfp8nf9UrZcAAAAM/uwu-cat.gif',
  'https://speed.animaker.com/assets/images/gif/Teacher.gif',
  'https://www.dish-works.com/wp-content/uploads/The-Art-of-Creating-min.gif',
  'https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif'
];

let index = 0;

function generateMessage() {
  let current = messages[index];
  let currentImage = images[index];
  index++;

  if (index >= messages.length) {
    index = 0;
  }

  let img = document.createElement('img');
  img.src = currentImage;
  img.classList.add('image');
  document.body.appendChild(img);

  return current;
}


// Get references to the DOM elements
const heading = document.getElementById('heading');
const message = document.getElementById('message');
const cursor = document.getElementById('cursor');
const button = document.getElementById('button');

// Define a function to update the message when the button is clicked
function handleClick() {
  let msg = generateMessage();
  message.textContent = '';
  cursor.style.display = 'block';
  button.disabled = true;
  let i = 0;
  let intervalId = setInterval(() => {
    if (i >= msg.length) {
      clearInterval(intervalId);
      cursor.style.display = 'none';
      button.disabled = false;
      button.textContent = 'Click Again';


      if (i === messages.length) {
        document.querySelectorAll('.image').forEach((img) => {
          img.remove();
        });
      }

      return;
    }
    message.textContent += msg.charAt(i);
    button.textContent = 'Wait...';
    button.disabled = true;
    i++;
  }, 100);

  if (i === messages.length) {
    document.querySelectorAll('.image').forEach((img) => {
      img.remove();
    });
  }
}


// Attach the event listener to the button
button.addEventListener('click', handleClick);



