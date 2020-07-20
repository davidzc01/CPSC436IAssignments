import React from 'react'
import { Checkbox, Accordion, AccordionSummary, Typography, AccordionDetails, IconButton } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const PostItem = ({ onSelect, post, onStar, starStatus, onEdit, onDelete }) => (  
    <Accordion className='accordion'>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            >
            <FormControlLabel
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={
                    <Checkbox
                        onClick={onSelect}
                        // checked={selectStatus}
                        // // checked={selectStatus}
                    />
                }
                label={post.subject}
            />
            <div className='accordion-spacer'/>
            <FormControlLabel
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={
                    <IconButton
                        aria-label="edit"
                        onClick={onEdit}
                    >
                        <EditIcon />
                    </IconButton>          
                }
            />
            <FormControlLabel
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={
                    <IconButton
                        aria-label="edit"
                        onClick={onDelete}
                    >
                        <DeleteIcon />
                    </IconButton>          
                }
            />
            <FormControlLabel
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={
                    <Checkbox
                        onClick={onStar}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        checked={starStatus}
                    />                
                }
            />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            {post.content}
          </Typography>
        </AccordionDetails>
    </Accordion>  
)

export default PostItem