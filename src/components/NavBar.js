import React, { Component } from 'react';
import { List, Divider, ListItem, ListItemText, Hidden, Drawer, Typography, AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 250;
const styles = theme => ({
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#B59A57",
        color: "#fefefe",
        border: "none",
    },
    content: {
        flexGrow: 1,
        minHeight: "100vh",
    },
    toolbar: theme.mixins.toolbar,
    navItem: {
        marginRight: theme.spacing(2),
        color: "#fefefe",
        textDecoration: "none"
    },
    appBar: {
        backgroundColor: "#B59A57"
    }
});

class Layout extends Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes } = this.props;
        const { mobileOpen } = this.state;

        const drawer = (
            <div>
                <List>
                    {['Home', 'Education', 'Experience', 'Projects'].map(text => (
                        <div key={text}>
                            <ListItem button component="a" href={`#${text.toLowerCase()}`} onClick={mobileOpen ? this.handleDrawerToggle : null}>
                                <ListItemText primary={text} />
                            </ListItem>
                            <Divider />
                        </div>
                    ))}
                </List>
            </div>
        );

        return (
            <div>
                <Hidden mdUp implementation="css">
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerToggle}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit">
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Hidden>
                <Hidden smDown implementation="css">
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar>
                            <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
                            </Typography>
                            {['Home', 'Education', 'Experience', 'Projects'].map(text => (
                                <a href={`#${text.toLowerCase()}`} className={classes.navItem} key={text}>
                                    <Button color="inherit">{text}</Button>
                                </a>
                            ))}
                        </Toolbar>
                    </AppBar>
                </Hidden>
                <nav>
                    <Hidden mdUp implementation="css">
                        <Drawer
                            variant="temporary"
                            open={mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{ paper: classes.drawerPaper }}
                            anchor="left"
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                {/* <main className={classes.content}>
                    <Hidden mdUp implementation="css"><div className={classes.toolbar} /></Hidden>
                </main> */}
            </div>
        );
    }
}

export default withStyles(styles)(Layout);
