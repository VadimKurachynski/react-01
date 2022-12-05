import s from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import React from "react";
import {NavLink} from "react-router-dom";


let Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map(p => {
                    return (
                        <span className={props.currentPage === p ? s.selectedPage : s.selectedPagenot}
                              onClick={(e) => {
                                  props.onPageChanged(p);
                              }}>{p} </span>
                    )
                }
            )}
        </div>
    )
 }
