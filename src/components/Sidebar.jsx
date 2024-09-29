import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Sidebar and menu item styling with black and ash (gray) theme
  const sidebarStyle = {
    width: isOpen ? "200px" : "70px",
    height: "100vh",
    backgroundColor: "#000000", // Black background for the sidebar
    color: "white",
    position: "fixed",
    top: 0,
    left: 0,
    transition: "all 0.3s ease",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column", // Stack items vertically
    justifyContent: "space-between", // Space between header and menu items
  };

  const menuItemStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    width: "auto", // Make items take full width
    padding: "15px 0", // Adjust vertical padding
    fontSize: "16px",
    backgroundColor: "#4d4d4d", // Ash gray background for menu items
    margin: "5px 7px", // Adjust margin for vertical spacing
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const iconStyle = {
    marginRight: isOpen ? "10px" : "0px",
    transition: "margin-right 0.3s",
  };

  const menuItemHoverStyle = {
    backgroundColor: "#2e2e2e", // Darker gray on hover
  };

  return (
    <div style={sidebarStyle}>
      <div
        style={{
          display: "flex",
          height: "60px",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px",
          backgroundColor: "#1c1c1c", // Dark gray for sidebar header
        }}
      >
        <button
          onClick={toggleSidebar}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "white",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        {isOpen && (
          <h2 style={{ marginLeft: "10px", fontSize: "20px" }}>Menu</h2>
        )}
      </div>

      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          margin: 0,
          flex: 1, // Allow the list to take up available space
          display: "flex",
          flexDirection: "column", // Stack items vertically
          justifyContent: "center", // Center items vertically
          alignItems: "center", // Center items horizontally
        }}
      >
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none", width: "100%" }}
        >
          <li
            style={menuItemStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                menuItemHoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                menuItemStyle.backgroundColor)
            }
            title="Home"
          >
            <i className="fa-solid fa-home"></i>
            {isOpen && <span>Home</span>}
          </li>
        </Link>
        <Link
          to="/jobs"
          style={{ color: "white", textDecoration: "none", width: "100%" }}
        >
          <li
            style={menuItemStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                menuItemHoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                menuItemStyle.backgroundColor)
            }
            title="Search Jobs"
          >
            <i className="fa-solid fa-suitcase"></i>
            {isOpen && <span>Jobs</span>}
          </li>
        </Link>
        <Link
          to="/tests"
          style={{ color: "white", textDecoration: "none", width: "100%" }}
        >
          <li
            style={menuItemStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                menuItemHoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                menuItemStyle.backgroundColor)
            }
            title="Tests"
          >
            <i className="fa-solid fa-file-circle-check"></i>
            {isOpen && <span>Tests</span>}
          </li>
        </Link>
        <Link
          to="/connect"
          style={{ color: "white", textDecoration: "none", width: "100%" }}
        >
          <li
            style={menuItemStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                menuItemHoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                menuItemStyle.backgroundColor)
            }
            title="Friends"
          >
            <i className="fa-solid fa-user-group"></i>
            {isOpen && <span>Friends</span>}
          </li>
        </Link>
        <Link
          to="/dashboard"
          style={{ color: "white", textDecoration: "none", width: "100%" }}
        >
          <li
            style={menuItemStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                menuItemHoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                menuItemStyle.backgroundColor)
            }
            title="Dashbaord"
          >
            <i className="fa-solid fa-chart-line"></i>
            {isOpen && <span>Dashboard</span>}
          </li>
        </Link>
        <Link
          to="/account"
          style={{ color: "white", textDecoration: "none", width: "100%" }}
        >
          <li
            style={menuItemStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                menuItemHoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                menuItemStyle.backgroundColor)
            }
            title="Login/Register"
          >
            <i className="fa-solid fa-user"></i>
            {isOpen && <span>Account</span>}
          </li>
        </Link>
      </ul>
    </div>
  );
}
