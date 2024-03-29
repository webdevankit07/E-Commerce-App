const FormatPrice = ({ price }) => {
    return Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price * 80);
};

export default FormatPrice;
