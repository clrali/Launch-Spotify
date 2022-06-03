import React, {useContext, useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import { AccessTokenContext } from '../../Contexts/accessTokenContext';
import '../../App.css'

function TopSongs() {
  const { accessToken } = useContext(AccessTokenContext);
  const [songs, setSongs] = useState([])

  useEffect(() => {
      fetch("http://localhost:9000/users/toptracks?token=" + accessToken)
      .then(res => res.json())
      .then(data => {
          console.log(data.items)
          setSongs(data.items)
      })
  }, [])
  
  return (
      <div>
          <h1>Top Songs</h1>
          {songs.length > 0 && 
              songs.map((val, key) => {
                  return (
                      <Box sx={{ mx: "auto", width: 500, p: 2 }} >
                        <Card variant="outlined" style={{margin: '0 auto', display: "flex"}}>
                          <img src={val.album.images[0].url}
                          alt="album cover"
                          width="300"
                          height="300"/>
                          <div>
                          <CardContent>
                              <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
                                  {val.name} by {val.album.artists[0].name}
                              </Typography>
                          </CardContent>
                          <CardActions>
                              <Button 
                              size="small" 
                              href={val.preview_url} 
                              target="_blank"
                              variant="outlined"
                              style={{margin: '0 auto', display: "flex"}}>
                                  Preview Song
                              </Button>
                          </CardActions>
                          </div>
                      </Card>
                      </Box>
                  )
          })
          }
      </div>
  )
}

export default TopSongs