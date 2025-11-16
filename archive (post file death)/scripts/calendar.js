        const holidays = {
            '2-15': 'lupercalia',
            '4-30': 'hexennacht',
            '7-25': 'unveiling-day',
            '10-31': 'halloween',
            '10-7': 'birthday',
            '12-25': 'sol-invictus'
        };

        const holidayNames = {
            'lupercalia': 'Lupercalia',
            'hexennacht': 'Hexennacht',
            'unveiling-day': 'Unveiling Day',
            'halloween': 'Halloween',
            'birthday': 'Birthday',
            'sol-invictus': 'Sol Invictus'
        };

        function createCalendar(year, month) {
            const monthNames = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            const firstDay = new Date(year, month, 1);
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            let calendarHTML = `<h2 id="rainbow-header">${monthNames[month]} ${year}</h2><table><tr>`;

            // Days of the week
            ['S', 'M', 'T', 'W', 'TH', 'F', 'S'].forEach(day => {
                calendarHTML += `<th>${day}</th>`;
            });
            calendarHTML += `</tr><tr>`;

            // Fill in the days
            for (let i = 0; i < firstDay.getDay(); i++) {
                calendarHTML += `<td></td>`;
            }
            for (let day = 1; day <= daysInMonth; day++) {
                const today = new Date();
                const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
                const holidayClass = holidays[`${month + 1}-${day}`] || '';
                const holidayTitle = holidayNames[holidayClass] ? `title="${holidayNames[holidayClass]}"` : '';
                calendarHTML += `<td class="${isToday ? 'highlight' : ''} ${holidayClass}" ${holidayTitle}>${day}</td>`;
                if ((day + firstDay.getDay()) % 7 === 0) {
                    calendarHTML += `</tr><tr>`;
                }
            }
            calendarHTML += `</tr></table>`;
            return calendarHTML;
        }

        let currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        document.getElementById('calendar').innerHTML = createCalendar(currentYear, currentMonth);

        // Rainbow text effect
        const colors = ['red', 'orangered', 'yellow', 'lime', 'blue', '#6f00ff', '#ff007b'];
        const header = document.getElementById('rainbow-header');
        let index = 0;

        function changeColors() {
            const text = header.innerText;
            header.innerHTML = text.split('').map((char, i) => {
                return `<span style="color: ${colors[(i + index) % colors.length]}">${char}</span>`;
            }).join('');
            index++;
        }

        setInterval(changeColors, 50); // Change color every 200ms

        // Function to show next month
        function showNextMonth() {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
            }
            document.getElementById('calendar').innerHTML = createCalendar(currentYear, currentMonth);
        }

        // Automatically show next month every 5 seconds (for demonstration)
        //setInterval(showNextMonth, 5000);