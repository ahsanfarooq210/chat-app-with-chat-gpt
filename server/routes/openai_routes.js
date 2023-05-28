import express from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
import { openAi } from '../index.js'
import { text } from '../controller/openai_controller.js'

dotenv.config()
const router=express.Router()

router.post('/text' ,text)

export default router