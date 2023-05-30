# Focus Timer
The elegant way to improve your attention span and focus time.
![websitePhoto](https://i.imgur.com/eaLXIoo.jpeg)

## Features
This website is based on the pomodoro Technique which states that Work for 50 minutes and then take a 10 minute break. Repeat this 4 times.
- Aesthetic Design
- 6 vibrant themes
- Cool Lofi music in the background so you can focus better.
- Mobile Compatibility so you can focus wherever you are.

## Contribution
If you are new to open source contributions I suggest you [read](https://opensource.guide/) this first. 
Want to contribute to this project? Let us know with an [issue](https://github.com/mohakdev/focus-timer/issues?q=is%3Aissue+is%3Aopen) that communicates your intent to create a **PR**.
Here are steps to clone this repo.
- open Terminal / CMD / Powershell / Bash
- Enter the following command at your desired location `git clone https://github.com/mohakdev/focus-timer`
- Great now you are ready to contribute.

### Add a New Theme
If you simply want to add a new theme to the website then follow these steps-
- First choose an image make sure it's atleast **1400x700** pixels
- Then in the repository go to `Art/Images`
- Add your desired image there.
- Then go to `index.html`which is present in the root of repository and in there find select element with id `theme`
- Add a new option for your theme in that select element. Also make sure the value of the option should be the name of the file.
- Congrats you have added your own theme to this project.
- You can create a PR so that your theme can be used on the website.

### Add New Background Music
To add new background music follow these steps -
- First create an account in [Juke Host](https://jukehost.co.uk/)
- Then upload your desired music there.
- Copy the id link of your desired music. Note if your music link is `https://audio.jukehost.co.uk/kH1ekepotpGLgw0ocuMAucK2SBkpaqAB` then your id is `kH1ekepotpGLgw0ocuMAucK2SBkpaqAB` copy this ID.
- Go to `Javascript/sounds.js` from your root repository.
- In there find `audioFiles` variable and then add your music id as follows `musicURL('ID')`
- Congrats you have successfully added your own background music. To listen to this music in the website please add a **PR**.
