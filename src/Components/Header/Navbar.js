import { Link} from "react-router-dom";

import "./Navbar.css";




const Navbar=()=>{
    return(
        
        <div className="Wrapper">
            <nav>
                <ul>
                <img src="https://strugend.com/assets/images/logo/selogo4.png" alt="Profile" />
                    
                    <h1>Strugend Ecommerce</h1>
                    <li>Home</li>
                    <Link to={"/Products"} ><li>Products</li></Link>
                    {/* <li>Services</li> */}
                    <li>Contact Us</li>
                </ul>

            </nav>
            <div className="searchBox">
                <input type="text" name="" id=""  placeholder="search here..."/>
                <button type="submit">Search</button>
            </div>
            <Link to={"/cart"}>
            <div className="cart">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAABTVBMVEX////y8vL+/v76+vr09fLr6+uJDPz3+fLm5uaRD/39//P29vaAE/z29/L08/HNzc10HvvHx8diK/jUuvRtJPqZE/7e3fDd3d3X19dZNPZcMPd6APyEAPyfUvrp7fK9vb09YPJJQvQ9afA+WPJBSPNNPfW3rvHBqPKcePVrdPM+XPLk2vHGoviqGfyLY/ebWvqZQvetdvWtra1iAPqyuO+6pvc/UvKAbfGFafM+dPA2L/RLGvd4VPN9SvU6mu08iOxohfG5V/riL/zovvQ7ru06o+s7gO1okvBpe/M9eu90MvjUXfm+GvzNIPrzJfdRvuoesel4yuzK1/GMrO47ku24y+96o+7Sw/KuhPO3jfNmYPOfm/CbjvOEj++KKfze0fOZpO2mZfaSgvPmh/PuWvbzq/Katu2o1u++4PCIve7PmPTke/WzQvjQfvXwy/WIISaUAAALe0lEQVR4nO2c+1fTWhbHOWnSpEmT0kKTQktCgQLKq22wCIULepWRjjiKDx5iq1694/U69///cfY+aUNebWMfmc6a+S61WrI8n+69z36cBKamxiuGGfaC0Sm6lfqL6UsTpWEiXKufJokkKpb+6zDRGaZ/XE5UYEYYLxMUmv9HCVZkMH2TwyTtkugyWaiPPVEwESkalHCrRBMOIdeIxkVhVokoWEL5KKLI/Z/bIOFWitIqk+OBMMNaJBjRr9VH40Fhuqg3yZjMggvHfOoDM0a7SBwnuMWR2H8gJNAsxC9NI11hxldeKYui6C4RSUgJ3T01PpsxElH0f7x8+eTJ06dPf/nlzZs3x6dvdMnISd0iO4wGhQGnvHqJMB2a4+PTCymV5mJjo+n6VfCSbZg2y/Hpa1kwNMm/x0JrQBNh+L564mI5Pj3VFSOtcUOJSJQpwC7dCRnCKfpLJHlquegUfp29ZWF7DyVB0wQSCzJODxYmJnCSBDuoo3enAPNOHFa8TIScRvzG6eE5uJZokONsyW8R5uxvHZ049MzSPUt7th7a2u7o4WaLyETLcW6aPlGEiSaXSqcNS2mFIMs+amlpaXFx8f795eXlWq22gioWi6ViCTRnaR6UoZqdzTQys9Md5U1z4ZJncylOstcPky2ZmATVQLOU4vh3+zZLm8aJgzxFymMjdYgaQIOyga4UpLkrLCE2F4OFUmpLENiL/X0nTA+WUi+WZDKZvxJJWnOYJtzUwnQ6iZhA9BPKgjahEJSCrr+yctBRpu5WBl1kOpREmWu8kL4rLGGzTidJxThOfr2EZtn16WNtZTVYaw/qR6trTl2X8wBTKOtSOkcGLA+wtwRFXQKW+yovu8WzNweED5S4Ya6L7neUCtLkZ/icwQ3YjjBT4CfxDKPlI+vtK9hn9Qs5oN+AfLBqXvGei+VP+WS88EkUDEEasHBSP+0uQuTu694l+ff1Xd77ZvsrEB3e92YQpilyVW1QGGgpYD+hZWpvvVaQd+u3wTDyZ/PSezWr5uPxeJPljCFg0DQni0uLyx+8C7PqwZ4SCKNs51ter8otgCk0+aEsw6CflmFfL+relfWDG5/vrC8cTateGPGqADBlURgGZooIrI5JprbLKx7tlVTZ+x6IVWePdNb5BkgtI8w1r1UHDmBaxgn7YRny7uKzE09ZXCnd7PmL4vb24Wxjx6tyHNWSDUMIsbWDUxEWTkG+rNHsW1wpHpTsrFuvwz86Kdd0CQpjPg/FMW+rAHaBnU24amrQPNMxjbKM+qirbu1m9vBlY4P+ib82UOoD87P1tztdUpgZPmWEycBdCzrDCJz4oQYwz1g7BOirrGYORRoQrBUX7fAQN80HIusSv0lhFKWa7jH03C3ZdSyCkiC3aIW88Ownea4elILFitnyvK/T8L2CvZQjfWF6NDrMlASl+x6wlN57Uo14Y/q2MIjfMTfcb8uXmPHil3K6d8pjLJSebTGkmo9FaBxqns/L3/ozLYhtmB5q/hMaZoHtHb6hOgvwE2RbgCl5rM+vmgEFgdVn86L7nY0mRsyamDNyPY4QmN5WaV8E+4m/AdOUPrhh2Ja57ncT28o33DD8GhgmkVBjEL7SwMNuGwZKAr8KjV1xxZ3+WXXu0F8Q5Euz4oGB8M0mKjJ4qX/49oWB0q1iu3uwyzs3rKwfzqsy6xG/Zl67djbfKiQSiULf8A0JA5Mdfw8773uOlIep7mH90sp6jvymXuU33RmvUshm402e0CQzJEy7dB/QOeAAm39H452pT8ME0KkDefydT9IKkCy0BeESTxQ2oUZqg/a/LhpJUHQ6sh3e3Bw6dJRp0Bdb5XJ5oZksu5XIgps2YoYxdPhSQaphb3Ey2nOP0Kr50D9Xlxu6698LgBKvyMIIwtcyDZbuA6Cpe1KueeTbTSRfdm4xth2+fKqqjeSYEvaTRmQc3DLukiAeNTyZH5vdBedb/DXCJGSpGqqTCQMD+0m8BdPMbbszyLqvIEAd+uQE1pvoJWzxBh7fKIIDBktCa34OTONqtXnoFrwFaybvHJr4GTRMlrZ4Q4Qv46LB0n0Dc3391pldIdt6xzX+Ku8cmvgF2NmJR7xVI0dzlk5Lwvs6HjM4mxq2Nb3jtUwl7/Ac20IvJWYwfAfPvp4Oh/pJRZj6peNzs3rDJB7tFByexPDNZrf0WGD4DnhbmbbC/MP5ufnMZ2fQyIfe/gqaurudzasQL9nENU0yPh+FY/E3flaLtZqZm58v6Y6zCPHKvBRdhxMbzSbpnFjwrXI8CzAtq0YOaBn/VRjCiornUvWH6w4dmTvrlUplfb2CL6BP8WalowWoS8Cy0AnfAViYwI6YhvBeBsrkrD0oQTnEwzrHdIR1Md5+iWNHBYbZaslB4Rtqa3UdWQDm0rRPM51nh9P0lCwZdwo3EaJkYStx2DwMgNL13M9KNcUeLMkglkQZdl81KGKGSTm0JLCfsYXJuM4O3U6iHuq4CXCuVZ4YYaaln4ShpdsEFvP2gVOb3XWpiDGhauQEcndvZSRPN1I/8Q3wkbkpBp8s+iQTzahWU5p9G0SiJWEUTQ2kGsgrECtHwYdEQdI05w0ZIde+iTYCGizdGLnQNyiswrK+c6KgoyP7QIAlPMulRtN6WtMcOcQG/IgeAC300aOO/m7py28qqw1zPuNkgVQjQAfT2dP+bYStC93YWbqvt1DPqc7Pzx+DvsDWGn52asPgAZ853S2/4EiSsJPd1h1LG+XxixctFk+LRgMD+0nezrth7vIcjGrdWCjNixcv9FHBTFlTwlq3XAdesp0FQICStXDuWL7yeFw0gkGO/oElYSakfp351aMNVjJGETPWf0Dvp7pul4g98h9taegV+BdQjBhGqucJzU/BgJ/wFibI4IiiX/z+eveCyCRlGGmfjJykELji9VtdVjS8An7nAvqan4SxcyZkYS2XAqVzEvvPp8f7i7WVPRV6hGo65RORvz05Plu6X7zZ5aV01UhDXSBSj/zLhHl0yzmz4A1MQqDKkFdvTs+WFmvFufouz2ExlO4EVwiSArRniFuqfwaalNb1tn8bJcQxmusKerMwFgMf/fELfupasTSXmW2xOXpCZiuGj758a7MU5+bNBzze3Am85++wS3/52yJG4hTdYlkpwcBg7tDM6pr6oEg+sVky080NNp3rVZaY8EAeGMKxf5zadoHKAEu5ZhGILeWbzTI/m8xvWrcnu599/zSGDUPIu/2lRWqX2elkvLDGp9KcE0Yi8u82S6OZLOzQ25Ojfw4JYBT9xLILZYkXvsPnFpyhBTDvlto+ApZ4/IcouD3p/h8Hh8FHfk4cLIkEWMY1v0JU8R+XHSzZR71ghhC0EoT9YMXuLLJsbf0lp9MeGHl3xcGy9Z3ehBuLmzj57QGNXYvlsSzBzOgKYJg/a6U2C1TNc+uEZhww2JrXYLikLLDSV+/BVPsIZb6Rsezy/E92FOfjgTB4+qmWoOVDuzw//40eOHvyDGTgvTqaDmm/EDZdzfUqBUPQSBonqztJ6F2yz8+/slB5vHNaTACaq2S+AHY5/1OXtaHuTvbG4XKEVWYqzeyj7y1RSlVT3rMg4BVYuXX9o/njX3/JslBNBx2KjIQFHJXTiNWtyIJR9U8gsP81jWPxClHm0ujGMUSMBYM0KajUhNPSOL/6wwFp4AqOEAHanZQ2vidnkUYScvRBMWQKKsdYT7UUfY4MrCiN8btPcHHoWqynhaXgzgCBCWddEQvTqwSvExaHuXt2s9slYR617rVKCA6bpvcjpGEffB1GE/QtJ8MrtKGi+dDDnC6OWoMfuo5cYb8rbnIU0XfoDXrHYAyKzPoh0mWEodB/Uo6CItxKkf6kjknajZOjySmeTITpO6J1RqQId8kEWWaiWCJZ5L/wA09OUzFJPw5hgjri0FcNqQi/2T6qhULoZ38W2b8BEPXwoEtTvk4AAAAASUVORK5CYII=" alt="Cart" />
            </div>
            </Link>
            
        </div>    
    )
};

export default Navbar;

