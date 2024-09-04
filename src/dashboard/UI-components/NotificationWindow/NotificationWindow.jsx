import React, { useContext, useEffect, useState } from "react";
import styles from "./NotificationWindow.module.css";
import { Link } from "react-router-dom";
import notifIcon from "../../assets/notif.svg";
import $ from "jquery";
import useWebSocket from "react-use-websocket";
import { alertsContext } from "../../_context/alretsContext";

const NotificationWindow = () => {
  const [openNotificationWindow, setOpenNotificationWindow] = useState(false);
  const { newAlerts } = useContext(alertsContext);
  const toggleNotificationWindow = () => {
    setOpenNotificationWindow(!openNotificationWindow);
  };

  const { sendMessage, lastMessage, readyState } = useWebSocket(
    "ws://ec2-44-219-37-232.compute-1.amazonaws.com/ws/blogs/"
  );

  useEffect(() => {
    if (lastMessage !== null) {
      console.log(lastMessage);

      console.log(lastMessage.data);

      const newAlert = JSON.parse(lastMessage.data);
    }
  }, [lastMessage]);

  useEffect(() => {
    // Show the first tab by default
    $(".notification_window .tab").hide();
    $(".notification_window .tab:first-child").show();
    $(".notification_window .tabs-nav li:first").addClass("selected");

    // Change tab class and display content
    $(".notification_window .tabs-nav a").on("click", function (event) {
      event.preventDefault();

      $(".notification_window .tabs-nav li").removeClass("selected");
      $(".notification_window .tabs-nav li").addClass("not-selected");
      $(this).parent().removeClass("not-selected");
      $(this).parent().addClass("selected");
      $(".notification_window .tab").hide();
      $($(this).attr("href")).show();
    });
  }, []);

  return (
    <div className="relative">
      <button
        className={styles.notificationBtn + " notificationBtn"}
        type="button"
        onClick={toggleNotificationWindow}
      >
        <img src={notifIcon} alt="" />
        <span>{newAlerts.length}</span>
      </button>
      <div
        className={
          openNotificationWindow
            ? styles.notification_window + " notification_window " + styles.open
            : styles.notification_window + " notification_window "
        }
      >
        <ul class="tabs-nav flex items-center">
          {/* taps that show the appropriate content in leaderBoard page */}
          <li>
            <a href="#Alerts">Alerts</a>
          </li>
          <li>
            <a href="#News">News</a>
          </li>
        </ul>
        <div class={styles.tabs_content + " tabs-stage"}>
          {/* Biggest Winners content that show when user click on Biggest Winners tab in leaderBoard page */}
          <div id="Alerts" className="tab space-y-4">
            {newAlerts.map((alert, index) => (
              <Link to="/dashboard/alerts" key={index}>
                <div className={styles.notification_item}>
                  <p>
                    <span>{alert.symbol}</span> just announced an acquisition of{" "}
                    <span>{alert.acquiredSymbol}</span> at{" "}
                    <span>{alert.amount}</span>.{" "}
                  </p>
                  <span>{alert.time}</span>
                </div>
              </Link>
            ))}
          </div>

          <div id="News" className="tab space-y-4">
            <Link to="/dashboard/alerts">
              <div className={styles.notification_item}>
                <p>
                  <span>$TSLA</span> just announced an acquisition of{" "}
                  <span>$NFLX</span> at <span>$200 B</span>.{" "}
                </p>
                <span>26 mins ago</span>
              </div>
            </Link>
            <Link to="/dashboard/alerts">
              <div className={styles.notification_item}>
                <p>
                  <span>$TSLA</span> just announced an acquisition of{" "}
                  <span>$NFLX</span> at <span>$200 B</span>.{" "}
                </p>
                <span>26 mins ago</span>
              </div>
            </Link>
            <Link to="/dashboard/alerts">
              <div className={styles.notification_item}>
                <p>
                  <span>$TSLA</span> just announced an acquisition of{" "}
                  <span>$NFLX</span> at <span>$200 B</span>.{" "}
                </p>
                <span>26 mins ago</span>
              </div>
            </Link>
            <Link to="/dashboard/alerts">
              <div className={styles.notification_item}>
                <p>
                  <span>$TSLA</span> just announced an acquisition of{" "}
                  <span>$NFLX</span> at <span>$200 B</span>.{" "}
                </p>
                <span>26 mins ago</span>
              </div>
            </Link>
            <Link to="/dashboard/alerts">
              <div className={styles.notification_item}>
                <p>
                  <span>$TSLA</span> just announced an acquisition of{" "}
                  <span>$NFLX</span> at <span>$200 B</span>.{" "}
                </p>
                <span>26 mins ago</span>
              </div>
            </Link>
            <Link to="/dashboard/alerts">
              <div className={styles.notification_item}>
                <p>
                  <span>$TSLA</span> just announced an acquisition of{" "}
                  <span>$NFLX</span> at <span>$200 B</span>.{" "}
                </p>
                <span>26 mins ago</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationWindow;
