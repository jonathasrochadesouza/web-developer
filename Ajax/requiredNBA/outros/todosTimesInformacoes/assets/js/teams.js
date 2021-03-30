fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=nba')
    .then(r => r.json())
    .then(({ teams }) => {
        //iteratively render teams
        for (let i = 0; i < teams.length; i++) {
            let teamDiv = document.createElement('div');
            teamDiv.classList = 'col s12 m4 l2';
            teamDiv.innerHTML = `
            <div id="teamPhoto${i + 1}">
            <img src="${teams[i].strTeamBadge}" id="${teams[i].strTeam}">
            </div>
            <h5 class="teamTitle" id="teamName${i + 1}">${teams[i].strTeam}</h5>
            `;

            if (i % 6 === 0) {
                let divRow = document.createElement('div');
                divRow.className = 'row';
                document.getElementById('teamList').append(divRow);
            }

            document.getElementById('teamList').append(teamDiv);

        }
    });
