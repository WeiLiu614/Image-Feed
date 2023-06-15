"use client";

import { useState, useEffect } from "react";
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import axios from "axios";
import Images from './Images';
import '../css/feed.css';

const Feed: React.FC = () => {
    const [current, setCurrent] = useState(1);
    const [total, setTotal] = useState(50);
    const [images, setImages] = useState([]);
  
    const onChange: PaginationProps['onChange'] = (page) => {
        setCurrent(page);
    };

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then((res) => {
                setTotal(res.data.info?.count);
            })
    }, [])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character', {
            params: {
                page: current
            }
        })
            .then((res) => {
                setImages(res.data.results);
            })
    }, [current]);
  
    return (
        <div className="feed">
            <h1>Rick and Morty Characters</h1>
            <Images imagesData={images} />
            <Pagination 
                className="pagination"
                responsive
                current={current}
                defaultPageSize={20}
                onChange={onChange} 
                total={total}
                showSizeChanger={false}
            />
        </div>
    );
  };
  
  export default Feed;