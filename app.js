// Inst github
const github = new GitHub;
// Inst profile
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;

    if (userText !== '') {
        // Make HTTP call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // Show alert
                } else {
                    // Show profile
                    ui.showProfile(data.profile)
                }
            })
    } else {
        // Clear Profile
    }
})