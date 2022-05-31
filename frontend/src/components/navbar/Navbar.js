import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { AppBar } from '@mui/material';
const Navbar = props => {
	return (
		<>
			<AppBar color='inherit' position='static' sx={{margin: '0px', padding: '5px'}}>
					<Typography variant="h3">Spotify Cool Project Yay!</Typography>
				<nav>
					<Button variant={useLocation().pathname==='/messages' ? 'contained' : 'text'} component={Link} to="/messages">Message Page</Button>
					<Button variant={useLocation().pathname==='/likedsongs' ? 'contained' : 'text'} component={Link} to="/likedsongs">Liked Songs</Button>
				</nav>
			</AppBar>
			
		</>
	);
};

export default Navbar;