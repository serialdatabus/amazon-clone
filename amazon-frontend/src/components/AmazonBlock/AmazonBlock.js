import React from "react";
import { fonticon } from "../../helpers/helpers";
import "../../styles/AmazonBlock.css";
const AmazonBlock = ({
  title,
  data,
  type,
  subtitle,
  icon,
  labelBottomLink,
  urlBottomLink,
}) => {
  return (
    <div className="amazon-block" style={{}}>
      <div className="block-header">
        {icon && type === "history" && (
          <div className="block-icon">{fonticon(icon)}</div>
        )}

        <div className="block-title">
          <span>{title}</span>
        </div>
      </div>

      <div className="block-sub-title">{subtitle}</div>

      {type === "single" && (
        <a href="/">
          <img
            alt=""
            className="singleimage"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg"
          ></img>
        </a>
      )}

      {type !== "single" && (
        <div className="block-content">
          {type === "history" && (
            <a href="/">
              <img
                alt=""
                className="history-image"
                src="https://m.media-amazon.com/images/I/51d5Qk88PDL._AC_SL260_.jpg"
              />
            </a>
          )}

          {type === "group" && (
            <div className="block-grid-products">
              <div className="line-product">
                {data.slice(0, 2).map((item, index) => (
                  <div key={index} className="block-grid-product">
                    <img alt="" src={item.image_url} />

                    <p>{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="line-product">
                {data.slice(2, 4).map((item, index) => (
                  <div key={index} className="block-grid-product">
                    <img alt="" src={item.image_url} />

                    <p>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {type === "history" && (
            <div className="history-description">
              <div className="history-bar"></div>
              <p className="history-label">Yesterday</p>
            </div>
          )}
        </div>
      )}
      <div className="block-bottom-link">
        <a href={urlBottomLink}>{labelBottomLink}</a>
      </div>
    </div>
  );
};

export default AmazonBlock;
