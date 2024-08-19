export const getTimeAgo = (dateTime) => {
    const customDate = new Date(dateTime);
    const currentDate = new Date();
    const timeDifference = currentDate - customDate;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    // Average days in a month (30.44 days per month)
    const averageDaysInMonth = 30.44;
    const totalMonths = Math.floor(days / averageDaysInMonth);
    const years = Math.floor(totalMonths / 12);

    if (years > 0) {
        return `${years} year${years > 1 ? "s" : ""} ago`;
    } else if (totalMonths > 0) {
        return `${totalMonths} month${totalMonths > 1 ? "s" : ""} ago`;
    } else if (weeks > 0) {
        return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
        return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
        return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
    }
};