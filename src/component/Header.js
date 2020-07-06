import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Form from '../Courses.js'
export default function Header() {
	return (
		<div>
			<AppBar position="fixed" >
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu">
					</IconButton>
					<Typography variant="h6" >
						News
    </Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
			<Form/>
		</div>
	)
}