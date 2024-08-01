document.getElementById('openPopupBtn').addEventListener('click',function()
{
document.getElementById('popup').style.display = 'block';
document.getElementById('popupBackground').style.display = 'block';

});

document.getElementById('submitAnswerBtn').addEventListener('click',function()
{
    const answer = document.getElementById('popupAnswer').value;
    if(answer.trim() === '4'){
        const popup = document.getElementById('popup');
        const correctMessage = document.getElementById('popupCrctMsg');
        correctMessage.style.display = 'block';
        popup.classList.add('fold');
          setTimeout(() => {
            popup.classList.remove('fold');
            popup.classList.add('rocket');
            popup.style.animation = 'spiral 3s forwards';
              setTimeout(() => {
                popup.style.display = 'none';
                document.getElementById('popupBackground').style.display = 'none';
                popup.classList.remove('rocket');
                popup.style.animation = '';
              }, 3000);
            }, 1000);
        }else{
           alert('Incorrect answer, try again!');
        }
    });

    document.getElementById('popupBackground').addEventListener('click', function()
{
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popupBackround').style.display = 'none';
});
