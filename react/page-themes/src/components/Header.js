import { useTheme } from "./Theme";

const Header = () => {
    const { toggleTheme, darkMode } = useTheme();
    return (
        <header>
            <h1>Demo Website</h1>
            <button
            onClick={toggleTheme}
            >
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
        </header>
    )
}

export default Header