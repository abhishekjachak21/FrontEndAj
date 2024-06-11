import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost



/*
Imagine we're in our toy city again, but this time we want to repaint one of the toy houses. So, we need to find the house we want to repaint, right? In our code, we have a special place called `useParams`, which is like a treasure map that tells us where to find the house we want to repaint. Once we know which house to repaint, we use another special tool called `useEffect` to go to the toy factory and fetch that specific house. We put this command inside a box called `useEffect` and tell it to run whenever the treasure map (the `slug`) changes, meaning whenever we want to repaint a different house. When we find the house, we put it on our painting table (`PostForm`) and start repainting it. So, in simple terms, `useParams` helps us find the house we want to repaint, and `useEffect` helps us fetch and repaint that specific house.
*/