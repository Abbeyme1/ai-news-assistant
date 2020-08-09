import React from "react";
import NewsCard from "./NewsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyles from "./styles";

const NewsCards = (props) => {
  const classes = useStyles();
  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {props.articles.map((article, i) => (
          <Grid item xs={12} sm={6} style={{ display: "flex" }}>
            <NewsCard i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
