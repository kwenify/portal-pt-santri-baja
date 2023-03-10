import React, { useMemo } from 'react'
import AricleItem from './AricleItem'
import { Flex, Grid, Heading, Text } from '@chakra-ui/react'

const Article = () => {
    const dummyArticle = useMemo(() => [
        {
            image: 'https://studio.syifaaviglowing.com/assets/images/article-1662781596-3itXz.jpeg',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe ab error omnis quaerat, non illum ex debitis? Odio soluta quas aperiam praesentium quos, illum, quisquam quo optio eos asperiores laborum consectetur. Itaque rerum asperiores iste animi vitae possimus non id fuga quo reprehenderit quas, accusamus illo fugit quia ab earum quibusdam dignissimos odio quae dolor maxime alias at sequi ex! Vero ipsa error debitis. Omnis fuga, blanditiis unde aliquid consectetur ducimus labore possimus quos deleniti, maiores, ex nobis saepe rerum debitis accusantium suscipit assumenda enim atque dolor eligendi officia? Eligendi asperiores eius nulla ad fugit nisi! Quisquam, dolor quos.',
        },
        {
            image: 'https://studio.syifaaviglowing.com/assets/images/article-1656322264-Hx734.jpeg',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe ab error omnis quaerat, non illum ex debitis? Odio soluta quas aperiam praesentium quos, illum, quisquam quo optio eos asperiores laborum consectetur. Itaque rerum asperiores iste animi vitae possimus non id fuga quo reprehenderit quas, accusamus illo fugit quia ab earum quibusdam dignissimos odio quae dolor maxime alias at sequi ex! Vero ipsa error debitis. Omnis fuga, blanditiis unde aliquid consectetur ducimus labore possimus quos deleniti, maiores, ex nobis saepe rerum debitis accusantium suscipit assumenda enim atque dolor eligendi officia? Eligendi asperiores eius nulla ad fugit nisi! Quisquam, dolor quos.',
        },
        {
            image: 'https://studio.syifaaviglowing.com/assets/images/article-1656149499-1u9w9.jpeg',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe ab error omnis quaerat, non illum ex debitis? Odio soluta quas aperiam praesentium quos, illum, quisquam quo optio eos asperiores laborum consectetur. Itaque rerum asperiores iste animi vitae possimus non id fuga quo reprehenderit quas, accusamus illo fugit quia ab earum quibusdam dignissimos odio quae dolor maxime alias at sequi ex! Vero ipsa error debitis. Omnis fuga, blanditiis unde aliquid consectetur ducimus labore possimus quos deleniti, maiores, ex nobis saepe rerum debitis accusantium suscipit assumenda enim atque dolor eligendi officia? Eligendi asperiores eius nulla ad fugit nisi! Quisquam, dolor quos.',
        },
        {
            image: 'https://studio.syifaaviglowing.com/assets/images/article-1656149700-O1oV1.jpeg',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe ab error omnis quaerat, non illum ex debitis? Odio soluta quas aperiam praesentium quos, illum, quisquam quo optio eos asperiores laborum consectetur. Itaque rerum asperiores iste animi vitae possimus non id fuga quo reprehenderit quas, accusamus illo fugit quia ab earum quibusdam dignissimos odio quae dolor maxime alias at sequi ex! Vero ipsa error debitis. Omnis fuga, blanditiis unde aliquid consectetur ducimus labore possimus quos deleniti, maiores, ex nobis saepe rerum debitis accusantium suscipit assumenda enim atque dolor eligendi officia? Eligendi asperiores eius nulla ad fugit nisi! Quisquam, dolor quos.',
        },
        // {
        //     image: 'https://studio.syifaaviglowing.com/assets/images/article-1655712976-0340r.jpeg',
        //     content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe ab error omnis quaerat, non illum ex debitis? Odio soluta quas aperiam praesentium quos, illum, quisquam quo optio eos asperiores laborum consectetur. Itaque rerum asperiores iste animi vitae possimus non id fuga quo reprehenderit quas, accusamus illo fugit quia ab earum quibusdam dignissimos odio quae dolor maxime alias at sequi ex! Vero ipsa error debitis. Omnis fuga, blanditiis unde aliquid consectetur ducimus labore possimus quos deleniti, maiores, ex nobis saepe rerum debitis accusantium suscipit assumenda enim atque dolor eligendi officia? Eligendi asperiores eius nulla ad fugit nisi! Quisquam, dolor quos.',
        // },
        // {
        //     image: 'https://studio.syifaaviglowing.com/assets/images/article-1655188802-YAm9W.jpeg',
        //     content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe ab error omnis quaerat, non illum ex debitis? Odio soluta quas aperiam praesentium quos, illum, quisquam quo optio eos asperiores laborum consectetur. Itaque rerum asperiores iste animi vitae possimus non id fuga quo reprehenderit quas, accusamus illo fugit quia ab earum quibusdam dignissimos odio quae dolor maxime alias at sequi ex! Vero ipsa error debitis. Omnis fuga, blanditiis unde aliquid consectetur ducimus labore possimus quos deleniti, maiores, ex nobis saepe rerum debitis accusantium suscipit assumenda enim atque dolor eligendi officia? Eligendi asperiores eius nulla ad fugit nisi! Quisquam, dolor quos.',
        // },
    ], [])

    return (
        <Flex direction='column' paddingY='50px'>
            <Heading fontFamily='Poppins' color='primary.50' textAlign='center'>Artikel</Heading>
            <Grid 
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(2, 1fr)',
                }} 
                paddingX='20px'
                paddingY='25px' 
                gap='20px'
            >
                {dummyArticle?.map((article, index) => {
                    return <AricleItem key={index} image={article.image} content={article.content} />
                })}
            </Grid>
            <Text 
                fontFamily='Poppins' 
                color='primary.50' 
                textAlign='center'
                fontWeight='semibold'
                cursor='pointer'
            >
                Lihat lebih banyak
            </Text>
        </Flex>
    )
}

export default Article