import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react'

function InfoBox({title,cases,total}) {

    

    return (
        <div>
            <Card className="infoBox">
                <CardContent>
                    {/* Title i.e Corona viras cases  */}
                    <Typography className='infoBox__title' color='textSecondary'>
                        {title}
                    </Typography>
                    
                    {/*  +120K Number of cases */}

                    <h2 className='infoBox__cases'>{cases}</h2>

                    {/* 1.2M total */}

                    <Typography className='infoBox__total' color='textSecondary'>

                        {total} Total

                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default InfoBox;
