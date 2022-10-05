let videoBtn = document.getElementById('video-btn');
let studBtn = document.querySelector('.stud-btn');
let topicsBtn = document.getElementById('topics-btn');
let noteBtn = document.querySelector('.note-btn');
let labBtn = document.querySelector('.lab-btn');
let chatBtn = document.querySelector('.chat-btn');
let topicList = document.getElementById('topics-list');
let studentList = document.getElementById('students-list');


videoBtn.addEventListener('click', () => {
    videoBtn.classList.replace('video-inactive', 'video-btn');
    noteBtn.classList.remove('active');
    labBtn.classList.remove('active');
    chatBtn.classList.remove('active');
})

studBtn.addEventListener('click', () => {
    studBtn.classList.add('active');
    topicsBtn.classList.replace('topics-btn', 'topics-inactive');
    topicList.classList.replace('topics-list', 'topics-list-hidden');
    studentList.classList.replace('students-list-hidden', 'students-list-show')
})

topicsBtn.addEventListener('click', () => {
    topicsBtn.classList.replace('topics-inactive', 'topics-btn');
    studBtn.classList.remove('active');
    topicList.classList.replace('topics-list-hidden', 'topics-list');
    studentList.classList.replace('students-list-show', 'students-list-hidden')
})

noteBtn.addEventListener('click', () => {
    videoBtn.classList.replace('video-btn', 'video-inactive');
    noteBtn.classList.add('active');
    labBtn.classList.remove('active');
    chatBtn.classList.remove('active');
})

labBtn.addEventListener('click', () => {
    videoBtn.classList.replace('video-btn', 'video-inactive');
    noteBtn.classList.remove('active');
    labBtn.classList.add('active');
    chatBtn.classList.remove('active');
})

chatBtn.addEventListener('click', () => {
    videoBtn.classList.replace('video-btn', 'video-inactive');
    noteBtn.classList.remove('active');
    labBtn.classList.remove('active');
    chatBtn.classList.add('active');
})