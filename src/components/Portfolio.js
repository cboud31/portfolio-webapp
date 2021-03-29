import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import graceShopper from '/Users/CoryB/Desktop/2021_codingProjects/portfolioWebsite/my-app/src/graceShopper.png';

import Project from './Project';

import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    fontFamily: 'Roboto Condensed',
  },
  media: {
    height: 240,
  },
});

const Portfolio = () => {
  const classes = useStyles();

  return (
    <div id="Carousel" className="carousel slide" data-ride="carousel">
      <h1 className="portfolio-heading">Portfolio</h1>
      <ol className="carousel-indicators">
        <li data-target="#Carousel" data-slide-to="0" className="active"></li>
        <li data-target="#Carousel" data-slide-to="1"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container" id="item-container">
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={graceShopper}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h1"
                  style={{ font: 'Roboto Condensed' }}
                >
                  Mango Record Store
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <List>
                    <ListItem>
                      <ListItemText>
                        Fullstack e-commerce web app where users can browse and
                        purchase vinyl records.
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText>
                        Technology Stack: PostgreSQL, Express, React, Node.js
                      </ListItemText>
                    </ListItem>
                  </List>
                </Typography>
              </CardContent>
              <CardActionArea>
                <CardActions>
                  <Link href="https://github.com/2007-LSU-WEB-PT-Mango/Grace-Shopper">
                    <Button size="small" color="primary">
                      GitHub
                    </Button>
                  </Link>
                  <Link href="https://mangorecordshop.herokuapp.com">
                    <Button size="small" color="primary">
                      Heroku
                    </Button>
                  </Link>
                </CardActions>
              </CardActionArea>
            </Card>
          </div>
        </div>

        {/* Re-Factor below over mapped Project Component */}
        {/* Item 2 */}

        <div className="carousel-item">
          <div className="container" id="item-container">
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={graceShopper}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h1"
                  style={{ font: 'Roboto Condensed' }}
                >
                  Mango Record Store
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <List>
                    <ListItem>
                      <ListItemText>
                        Fullstack e-commerce web app where users can browse and
                        purchase vinyl records.
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText>
                        Technology Stack: PostgreSQL, Express, React, Node.js
                      </ListItemText>
                    </ListItem>
                  </List>
                </Typography>
              </CardContent>
              <CardActionArea>
                <CardActions>
                  <Link href="https://github.com/2007-LSU-WEB-PT-Mango/Grace-Shopper">
                    <Button size="small" color="primary">
                      GitHub
                    </Button>
                  </Link>
                  <Link href="https://mangorecordshop.herokuapp.com">
                    <Button size="small" color="primary">
                      Heroku
                    </Button>
                  </Link>
                </CardActions>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
      <a
        href="#Carousel"
        className="carousel-control-prev"
        role="button"
        data-slide="prev"
      >
        <span className="sr-only">Previous</span>
        <span class="carousel-control-prev-icon" aria-hidden />
      </a>
      <a
        href="#Carousel"
        className="carousel-control-next"
        role="button"
        data-slide="next"
      >
        <span className="sr-only">next</span>
        <span class="carousel-control-next-icon" aria-hidden />
      </a>
    </div>
  );
};

export default Portfolio;
