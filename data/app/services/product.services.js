let productList = [
  {
    id: 1,
    tenSanPham: "ao polo 1",
    giaTien: 100,
    hinhAnh:
      "https://www.uniqlo.com/vn/vi/products/E451426-000?colorCode=COL00",
  },
  {
    id: 2,
    tenSanPham: "ao polo 2",
    giaTien: 200,
    hinhAnh:
      "https://www.uniqlo.com/vn/vi/products/E442821-000?colorCode=COL56",
  },
  {
    id: 3,
    tenSanPham: "ao polo 3",
    giaTien: 300,
    hinhAnh:
      "https://www.uniqlo.com/vn/vi/products/E441604-000?colorCode=COL38",
  },
];

const getList = () => {
  if (productList) {
    return productList;
  } else {
    return false;
  }
};

const getDetail = (id) => {
  const index = productList.findIndex((product) => {
    return product.id === id;
  });
  if (index !== -1) {
    const product = productList[index];
    return product;
  } else {
    return false;
  }
};

const createPro = (product) => {
  const newProduct = {
    id: Math.random(),
    ...product,
  };
  productList = [...productList, product];
  return newProduct;
};

const updatePro = (id, product) => {
  const index = productList.findIndex((product) => {
    return product.id === id;
  });
  if (index !== -1) {
    const oldProduct = productList[index];
    const updateProduct = { ...oldProduct, product };
    productList[index] = updateProduct;
    return updateProduct;
  } else {
    return false;
  }
};

const deletePro = (id) => {
  const index = productList.findIndex((product) => {
    return product.id === id;
  });
  if (index !== -1) {
    const product = productList[index];
    productList.splice(index, 1);
    return product;
  } else {
    return false;
  }
};

module.exports = {
  getList,
  getDetail,
  createPro,
  updatePro,
  deletePro
};
