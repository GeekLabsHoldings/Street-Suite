import React, { useEffect, useState } from "react";
import "./AboutUsPage.css";
import $ from "jquery";
import ReactApexChart from "react-apexcharts";
import dayjs from "dayjs";

import logo from "../../assets/Logo.png";
import { Helmet } from "react-helmet-async";
import "./AboutUs.css";
import { useLocation } from "react-router-dom";

const series = [
  {
    name: "Desktops",
    type: "line",
    data: [
      { x: new Date(1538778600000), y: 6530.81 },
      { x: new Date(1538778600000), y: 6531.81 },
      { x: new Date(1538778600000), y: 6533.33 },
      { x: new Date(1538778600000), y: 6535.04 },
      { x: new Date(1538778600000), y: 6539.81 },
      { x: new Date(1538778600000), y: 6525.81 },
      { x: new Date(1538778600000), y: 6533.33 },
      { x: new Date(1538778600000), y: 6543.04 },
      { x: new Date(1538778600000), y: 6549.81 },
      { x: new Date(1538778600000), y: 6551.81 },
      { x: new Date(1538778600000), y: 6535.33 },
      { x: new Date(1538778600000), y: 6533.04 },
      { x: new Date(1538778600000), y: 6528.81 },
      { x: new Date(1538778600000), y: 6529.81 },
      { x: new Date(1538778600000), y: 6525.81 },
      { x: new Date(1538778600000), y: 6533.33 },
      { x: new Date(1538778600000), y: 6543.04 },
      { x: new Date(1538778600000), y: 6549.81 },
      { x: new Date(1538778600000), y: 6551.81 },
      { x: new Date(1538778600000), y: 6529.81 },
      { x: new Date(1538778600000), y: 6533.33 },
      { x: new Date(1538778600000), y: 6523.04 },
      { x: new Date(1538778600000), y: 6529.81 },
      { x: new Date(1538778600000), y: 6529.81 },
      { x: new Date(1538778600000), y: 6533.33 },
      { x: new Date(1538778600000), y: 6523.04 },
      { x: new Date(1538778600000), y: 6529.81 },
      { x: new Date(1538778600000), y: 6529.81 },
      { x: new Date(1538778600000), y: 6533.33 },
      { x: new Date(1538778600000), y: 6523.04 },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6521.04,
      },
      {
        x: new Date(1538778600000),
        y: 6524.81,
      },
      {
        x: new Date(1538778600000),
        y: 6522.81,
      },
      {
        x: new Date(1538778600000),
        y: 6523.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6525.81,
      },
      {
        x: new Date(1538778600000),
        y: 6524.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6522.33,
      },
      {
        x: new Date(1538778600000),
        y: 6521.04,
      },
      {
        x: new Date(1538778600000),
        y: 6524.81,
      },
      {
        x: new Date(1538778600000),
        y: 6522.81,
      },
      {
        x: new Date(1538778600000),
        y: 6523.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6521.81,
      },
      {
        x: new Date(1538778600000),
        y: 6523.81,
      },
      {
        x: new Date(1538778600000),
        y: 6522.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6529.81,
      },
      {
        x: new Date(1538778600000),
        y: 6533.33,
      },
      {
        x: new Date(1538778600000),
        y: 6523.04,
      },
    ],
    color: "#53ACFF",
  },
  {
    name: "candle",
    type: "candlestick",
    data: [
      {
        x: new Date(1538778600000),
        y: [6629.81, 6650.5, 6623.04, 6633.33],
      },
      {
        x: new Date(1538780400000),
        y: [6632.01, 6643.59, 6620, 6630.11],
      },
      {
        x: new Date(1538782200000),
        y: [6630.71, 6648.95, 6623.34, 6635.65],
      },
      {
        x: new Date(1538784000000),
        y: [6635.65, 6651, 6629.67, 6638.24],
      },
      {
        x: new Date(1538785800000),
        y: [6638.24, 6640, 6620, 6624.47],
      },
      {
        x: new Date(1538787600000),
        y: [6624.53, 6636.03, 6621.68, 6624.31],
      },
      {
        x: new Date(1538789400000),
        y: [6624.61, 6632.2, 6617, 6626.02],
      },
      {
        x: new Date(1538791200000),
        y: [6627, 6627.62, 6584.22, 6603.02],
      },
      {
        x: new Date(1538793000000),
        y: [6605, 6608.03, 6598.95, 6604.01],
      },
      {
        x: new Date(1538794800000),
        y: [6604.5, 6614.4, 6602.26, 6608.02],
      },
      {
        x: new Date(1538796600000),
        y: [6608.02, 6610.68, 6601.99, 6608.91],
      },
      {
        x: new Date(1538798400000),
        y: [6608.91, 6618.99, 6608.01, 6612],
      },
      {
        x: new Date(1538800200000),
        y: [6612, 6615.13, 6605.09, 6612],
      },
      {
        x: new Date(1538802000000),
        y: [6612, 6624.12, 6608.43, 6622.95],
      },
      {
        x: new Date(1538803800000),
        y: [6623.91, 6623.91, 6615, 6615.67],
      },
      {
        x: new Date(1538805600000),
        y: [6618.69, 6618.74, 6610, 6610.4],
      },
      {
        x: new Date(1538807400000),
        y: [6611, 6622.78, 6610.4, 6614.9],
      },
      {
        x: new Date(1538809200000),
        y: [6614.9, 6626.2, 6613.33, 6623.45],
      },
      {
        x: new Date(1538811000000),
        y: [6623.48, 6627, 6618.38, 6620.35],
      },
      {
        x: new Date(1538812800000),
        y: [6619.43, 6620.35, 6610.05, 6615.53],
      },
      {
        x: new Date(1538814600000),
        y: [6615.53, 6617.93, 6610, 6615.19],
      },
      {
        x: new Date(1538816400000),
        y: [6615.19, 6621.6, 6608.2, 6620],
      },
      {
        x: new Date(1538818200000),
        y: [6619.54, 6625.17, 6614.15, 6620],
      },
      {
        x: new Date(1538820000000),
        y: [6620.33, 6634.15, 6617.24, 6624.61],
      },
      {
        x: new Date(1538821800000),
        y: [6625.95, 6626, 6611.66, 6617.58],
      },
      {
        x: new Date(1538823600000),
        y: [6619, 6625.97, 6595.27, 6598.86],
      },
      {
        x: new Date(1538825400000),
        y: [6598.86, 6598.88, 6570, 6587.16],
      },
      {
        x: new Date(1538827200000),
        y: [6588.86, 6600, 6580, 6593.4],
      },
      {
        x: new Date(1538829000000),
        y: [6593.99, 6598.89, 6585, 6587.81],
      },
      {
        x: new Date(1538830800000),
        y: [6587.81, 6592.73, 6567.14, 6578],
      },
      {
        x: new Date(1538832600000),
        y: [6578.35, 6581.72, 6567.39, 6579],
      },
      {
        x: new Date(1538834400000),
        y: [6579.38, 6580.92, 6566.77, 6575.96],
      },
      {
        x: new Date(1538836200000),
        y: [6575.96, 6589, 6571.77, 6588.92],
      },
      {
        x: new Date(1538838000000),
        y: [6588.92, 6594, 6577.55, 6589.22],
      },
      {
        x: new Date(1538839800000),
        y: [6589.3, 6598.89, 6589.1, 6596.08],
      },
      {
        x: new Date(1538841600000),
        y: [6597.5, 6600, 6588.39, 6596.25],
      },
      {
        x: new Date(1538843400000),
        y: [6598.03, 6600, 6588.73, 6595.97],
      },
      {
        x: new Date(1538845200000),
        y: [6595.97, 6602.01, 6588.17, 6602],
      },
      {
        x: new Date(1538847000000),
        y: [6602, 6607, 6596.51, 6599.95],
      },
      {
        x: new Date(1538848800000),
        y: [6600.63, 6601.21, 6590.39, 6591.02],
      },
      {
        x: new Date(1538850600000),
        y: [6591.02, 6603.08, 6591, 6591],
      },
      {
        x: new Date(1538852400000),
        y: [6591, 6601.32, 6585, 6592],
      },
      {
        x: new Date(1538854200000),
        y: [6593.13, 6596.01, 6590, 6593.34],
      },
      {
        x: new Date(1538856000000),
        y: [6593.34, 6604.76, 6582.63, 6593.86],
      },
      {
        x: new Date(1538857800000),
        y: [6593.86, 6604.28, 6586.57, 6600.01],
      },
      {
        x: new Date(1538859600000),
        y: [6601.81, 6603.21, 6592.78, 6596.25],
      },
      {
        x: new Date(1538861400000),
        y: [6596.25, 6604.2, 6590, 6602.99],
      },
      {
        x: new Date(1538863200000),
        y: [6602.99, 6606, 6584.99, 6587.81],
      },
      {
        x: new Date(1538865000000),
        y: [6587.81, 6595, 6583.27, 6591.96],
      },
      {
        x: new Date(1538866800000),
        y: [6591.97, 6596.07, 6585, 6588.39],
      },
      {
        x: new Date(1538868600000),
        y: [6587.6, 6598.21, 6587.6, 6594.27],
      },
      {
        x: new Date(1538870400000),
        y: [6596.44, 6601, 6590, 6596.55],
      },
      {
        x: new Date(1538872200000),
        y: [6598.91, 6605, 6596.61, 6600.02],
      },
      {
        x: new Date(1538874000000),
        y: [6600.55, 6605, 6589.14, 6593.01],
      },
      {
        x: new Date(1538875800000),
        y: [6593.15, 6605, 6592, 6603.06],
      },
      {
        x: new Date(1538877600000),
        y: [6603.07, 6604.5, 6599.09, 6603.89],
      },
      {
        x: new Date(1538879400000),
        y: [6604.44, 6604.44, 6600, 6603.5],
      },
      {
        x: new Date(1538881200000),
        y: [6603.5, 6603.99, 6597.5, 6603.86],
      },
      {
        x: new Date(1538883000000),
        y: [6603.85, 6605, 6600, 6604.07],
      },
      {
        x: new Date(1538884800000),
        y: [6604.98, 6606, 6604.07, 6606],
      },

      {
        x: new Date(1538793000000),
        y: [6605, 6608.03, 6598.95, 6604.01],
      },
      {
        x: new Date(1538794800000),
        y: [6604.5, 6614.4, 6602.26, 6608.02],
      },
      {
        x: new Date(1538796600000),
        y: [6608.02, 6610.68, 6601.99, 6608.91],
      },
      {
        x: new Date(1538798400000),
        y: [6608.91, 6618.99, 6608.01, 6612],
      },
      {
        x: new Date(1538800200000),
        y: [6612, 6615.13, 6605.09, 6612],
      },
      {
        x: new Date(1538802000000),
        y: [6612, 6624.12, 6608.43, 6622.95],
      },
      {
        x: new Date(1538803800000),
        y: [6623.91, 6623.91, 6615, 6615.67],
      },
      {
        x: new Date(1538805600000),
        y: [6618.69, 6618.74, 6610, 6610.4],
      },
      {
        x: new Date(1538807400000),
        y: [6611, 6622.78, 6610.4, 6614.9],
      },
      {
        x: new Date(1538809200000),
        y: [6614.9, 6626.2, 6613.33, 6623.45],
      },
      {
        x: new Date(1538811000000),
        y: [6623.48, 6627, 6618.38, 6620.35],
      },
      {
        x: new Date(1538812800000),
        y: [6619.43, 6620.35, 6610.05, 6615.53],
      },
      {
        x: new Date(1538814600000),
        y: [6615.53, 6617.93, 6610, 6615.19],
      },
      {
        x: new Date(1538816400000),
        y: [6615.19, 6621.6, 6608.2, 6620],
      },
      {
        x: new Date(1538818200000),
        y: [6619.54, 6625.17, 6614.15, 6620],
      },
      {
        x: new Date(1538820000000),
        y: [6620.33, 6634.15, 6617.24, 6624.61],
      },
      {
        x: new Date(1538821800000),
        y: [6625.95, 6626, 6611.66, 6617.58],
      },
      {
        x: new Date(1538823600000),
        y: [6619, 6625.97, 6595.27, 6598.86],
      },
      {
        x: new Date(1538825400000),
        y: [6598.86, 6598.88, 6570, 6587.16],
      },
      {
        x: new Date(1538827200000),
        y: [6588.86, 6600, 6580, 6593.4],
      },
      {
        x: new Date(1538829000000),
        y: [6593.99, 6598.89, 6585, 6587.81],
      },
      {
        x: new Date(1538830800000),
        y: [6587.81, 6592.73, 6567.14, 6578],
      },
      {
        x: new Date(1538832600000),
        y: [6578.35, 6581.72, 6567.39, 6579],
      },
      {
        x: new Date(1538834400000),
        y: [6579.38, 6580.92, 6566.77, 6575.96],
      },
      {
        x: new Date(1538836200000),
        y: [6575.96, 6589, 6571.77, 6588.92],
      },
      {
        x: new Date(1538838000000),
        y: [6588.92, 6594, 6577.55, 6589.22],
      },
      {
        x: new Date(1538839800000),
        y: [6589.3, 6598.89, 6589.1, 6596.08],
      },
      {
        x: new Date(1538841600000),
        y: [6597.5, 6600, 6588.39, 6596.25],
      },

      {
        x: new Date(1538793000000),
        y: [6605, 6608.03, 6598.95, 6604.01],
      },
      {
        x: new Date(1538794800000),
        y: [6604.5, 6614.4, 6602.26, 6608.02],
      },
      {
        x: new Date(1538796600000),
        y: [6608.02, 6610.68, 6601.99, 6608.91],
      },
      {
        x: new Date(1538798400000),
        y: [6608.91, 6618.99, 6608.01, 6612],
      },
      {
        x: new Date(1538800200000),
        y: [6612, 6615.13, 6605.09, 6612],
      },
      {
        x: new Date(1538802000000),
        y: [6612, 6624.12, 6608.43, 6622.95],
      },
      {
        x: new Date(1538803800000),
        y: [6623.91, 6623.91, 6615, 6615.67],
      },
      {
        x: new Date(1538805600000),
        y: [6618.69, 6618.74, 6610, 6610.4],
      },
      {
        x: new Date(1538807400000),
        y: [6611, 6622.78, 6610.4, 6614.9],
      },
      {
        x: new Date(1538809200000),
        y: [6614.9, 6626.2, 6613.33, 6623.45],
      },
      {
        x: new Date(1538811000000),
        y: [6623.48, 6627, 6618.38, 6620.35],
      },
      {
        x: new Date(1538812800000),
        y: [6619.43, 6620.35, 6610.05, 6615.53],
      },
      {
        x: new Date(1538814600000),
        y: [6615.53, 6617.93, 6610, 6615.19],
      },
      {
        x: new Date(1538816400000),
        y: [6615.19, 6621.6, 6608.2, 6620],
      },
      {
        x: new Date(1538818200000),
        y: [6619.54, 6625.17, 6614.15, 6620],
      },
      {
        x: new Date(1538820000000),
        y: [6620.33, 6634.15, 6617.24, 6624.61],
      },
      {
        x: new Date(1538821800000),
        y: [6625.95, 6626, 6611.66, 6617.58],
      },
      {
        x: new Date(1538823600000),
        y: [6619, 6625.97, 6595.27, 6598.86],
      },
      {
        x: new Date(1538825400000),
        y: [6598.86, 6598.88, 6570, 6587.16],
      },
      {
        x: new Date(1538827200000),
        y: [6588.86, 6600, 6580, 6593.4],
      },
      {
        x: new Date(1538829000000),
        y: [6593.99, 6598.89, 6585, 6587.81],
      },
      {
        x: new Date(1538830800000),
        y: [6587.81, 6592.73, 6567.14, 6578],
      },
      {
        x: new Date(1538832600000),
        y: [6578.35, 6581.72, 6567.39, 6579],
      },
      {
        x: new Date(1538834400000),
        y: [6579.38, 6580.92, 6566.77, 6575.96],
      },
      {
        x: new Date(1538836200000),
        y: [6575.96, 6589, 6571.77, 6588.92],
      },
      {
        x: new Date(1538838000000),
        y: [6588.92, 6594, 6577.55, 6589.22],
      },
      {
        x: new Date(1538839800000),
        y: [6589.3, 6598.89, 6589.1, 6596.08],
      },
      {
        x: new Date(1538841600000),
        y: [6597.5, 6600, 6588.39, 6596.25],
      },

      {
        x: new Date(1538793000000),
        y: [6605, 6608.03, 6598.95, 6604.01],
      },
      {
        x: new Date(1538794800000),
        y: [6604.5, 6614.4, 6602.26, 6608.02],
      },
      {
        x: new Date(1538796600000),
        y: [6608.02, 6610.68, 6601.99, 6608.91],
      },
      {
        x: new Date(1538798400000),
        y: [6608.91, 6618.99, 6608.01, 6612],
      },
      {
        x: new Date(1538800200000),
        y: [6612, 6615.13, 6605.09, 6612],
      },
      {
        x: new Date(1538802000000),
        y: [6612, 6624.12, 6608.43, 6622.95],
      },
      {
        x: new Date(1538803800000),
        y: [6623.91, 6623.91, 6615, 6615.67],
      },
      {
        x: new Date(1538805600000),
        y: [6618.69, 6618.74, 6610, 6610.4],
      },
      {
        x: new Date(1538807400000),
        y: [6611, 6622.78, 6610.4, 6614.9],
      },
      {
        x: new Date(1538809200000),
        y: [6614.9, 6626.2, 6613.33, 6623.45],
      },
      {
        x: new Date(1538811000000),
        y: [6623.48, 6627, 6618.38, 6620.35],
      },
      {
        x: new Date(1538812800000),
        y: [6619.43, 6620.35, 6610.05, 6615.53],
      },
      {
        x: new Date(1538814600000),
        y: [6615.53, 6617.93, 6610, 6615.19],
      },
      {
        x: new Date(1538816400000),
        y: [6615.19, 6621.6, 6608.2, 6620],
      },
      {
        x: new Date(1538818200000),
        y: [6619.54, 6625.17, 6614.15, 6620],
      },
      {
        x: new Date(1538820000000),
        y: [6620.33, 6634.15, 6617.24, 6624.61],
      },
      {
        x: new Date(1538821800000),
        y: [6625.95, 6626, 6611.66, 6617.58],
      },
      {
        x: new Date(1538823600000),
        y: [6619, 6625.97, 6595.27, 6598.86],
      },
      {
        x: new Date(1538825400000),
        y: [6598.86, 6598.88, 6570, 6587.16],
      },
      {
        x: new Date(1538827200000),
        y: [6588.86, 6600, 6580, 6593.4],
      },
      {
        x: new Date(1538829000000),
        y: [6593.99, 6598.89, 6585, 6587.81],
      },
      {
        x: new Date(1538830800000),
        y: [6587.81, 6592.73, 6567.14, 6578],
      },
      {
        x: new Date(1538832600000),
        y: [6578.35, 6581.72, 6567.39, 6579],
      },
      {
        x: new Date(1538834400000),
        y: [6579.38, 6580.92, 6566.77, 6575.96],
      },
      {
        x: new Date(1538836200000),
        y: [6575.96, 6589, 6571.77, 6588.92],
      },
      {
        x: new Date(1538838000000),
        y: [6588.92, 6594, 6577.55, 6589.22],
      },
      {
        x: new Date(1538839800000),
        y: [6589.3, 6598.89, 6589.1, 6596.08],
      },
      {
        x: new Date(1538841600000),
        y: [6597.5, 6600, 6588.39, 6596.25],
      },
    ],
  },
];

const options = {
  colors: ["#66C7F4", "#09c"],
  chart: {
    toolbar: {
      // Hamburger menu at top
      show: true,
    },
    animations: {
      enabled: true,
      easing: "linear",
      dynamicAnimation: {
        speed: 1000,
      },
    },
  },

  legend: {
    show: false,
  },
  stroke: {
    width: [4, 1],
  },

  plotOptions: {
    candlestick: {
      colors: {
        upward: "#FFFFFF8A",
        downward: "#FFFFFF8A",
      },
    },
  },

  xaxis: {
    tooltip: {
      enabled: false,
    },
    show: false,
    labels: {
      show: false,
      formatter: function (val) {
        return dayjs(val).format("MMM DD");
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    tooltip: {
      enabled: false,
    },
    labels: {
      style: {
        colors: ["rgba(151, 151, 151, 1)"],
        fontSize: "16px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: 400,
        cssClass: "apexcharts-yaxis-label",
      },
    },
  },
  grid: {
    borderColor: "rgba(255, 255, 255, 0.26)",
  },
};

const AboutUsPage = () => {
  const location = useLocation();
  const [change, setChange] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [position1, setPosition1] = useState({ top: 0, left: 0 });
  const [position2, setPosition2] = useState({ top: 0, left: 0 });
  const [position3, setPosition3] = useState({ top: 0, left: 0 });
  const [hasRefreshed, setHasRefreshed] = useState(false);
  // method thet handle toggle expand collapse
  const handleCollapse = (e) => {
    $(".collapse-body").slideUp(300);
    $(e.target).parents(".collapse-header").next().slideToggle(300);
    $(e.target).parents(".collapse-header").toggleClass("open");
  };
 
  useEffect(() => {
    console.log(document.getElementsByTagName("path"));
    
    // Function to handle path element selection
    const handlePathElements = () => {
      const pathElement1 = document.getElementsByTagName("path")[30];
      const pathElement2 = document.getElementsByTagName("path")[106];
      const pathElement3 = document.getElementsByTagName("path")[66];

      if (pathElement1) {
        pathElement1.addEventListener("mouseover", () => setHovered1(true));
        pathElement1.addEventListener("mouseleave", () => setHovered1(false));
        const rect1 = pathElement1.getBoundingClientRect();
        setPosition1({
          top: rect1.top - 50,
          left: rect1.right + 10,
        });
        pathElement1.style.stroke = "#00B2FF";
        pathElement1.style.fill = "#00B2FF";
      }

      if (pathElement2) {
        pathElement2.addEventListener("mouseover", () => setHovered2(true));
        pathElement2.addEventListener("mouseleave", () => setHovered2(false));
        const rect2 = pathElement2.getBoundingClientRect();
        setPosition2({
          top: rect2.top - 50,
          left: rect2.right + 10,
        });
        pathElement2.style.stroke = "#00B2FF";
        pathElement2.style.fill = "#00B2FF";
      }

      if (pathElement3) {
        pathElement3.addEventListener("mouseover", () => setHovered3(true));
        pathElement3.addEventListener("mouseleave", () => setHovered3(false));
        const rect3 = pathElement3.getBoundingClientRect();
        setPosition3({
          top: rect3.top - 50,
          left: rect3.right + 10,
        });
        pathElement3.style.stroke = "#00B2FF";
        pathElement3.style.fill = "#00B2FF";
      }
    };

    handlePathElements();
  }, []);
   useEffect(() => {
    const hasRefreshed = localStorage.getItem('aboutUsRefreshed');

    if (location.pathname === "/about-us" && !hasRefreshed) {
      // Set a flag to indicate that a refresh has occurred
      localStorage.setItem('aboutUsRefreshed', 'true');
      // Refresh the page
      window.location.reload();
    } else if (location.pathname !== "/about-us") {
      // Clear the flag if not on the target page
      localStorage.removeItem('aboutUsRefreshed');
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us | Street Suite</title>
        <meta
          name="description"
          content="Learn all about Street Suite – a trading alerts service you can trust."
        />
      </Helmet>

      <div className="aboutUs-wrapper">
        <ReactApexChart
          options={options}
          series={series}
          type="candlestick"
          height={800}
        />
        {hovered1 ? (
          <div
            className="z-[100] px-[--39px] py-[--sy-35px] w-fit rounded-[--19px] bg-[#53ACFF4D]"
            style={{
              position: "absolute",
              top: `${position1.top}px`,
              left: `${position1.left}px`,
            }}
          >
            <h3 className="text-[--29px] font-bold mb-[--sy-25px]">
              Who Are We?
            </h3>
            <p className=" mb-[--sy-20px] text-[--14px]">
              Welcome to our platform! Here, we strive to <br /> provide
              valuable information and services to our users.{" "}
            </p>
            <p className=" mb-[--sy-20px] text-[--14px]">
              Learn more about who we are, our mission, and <br /> how we aim to
              serve you better.{" "}
            </p>
            <p className=" mb-[--sy-20px] text-[--14px]">
              Thank you for choosing to explore our platform.
            </p>
            <span className=" border-8 h-0 border-l-transparent border-t-transparent border-b-transparent border-[#53ACFF4D] absolute -left-[--16px] border-solid"></span>
          </div>
        ) : null}
        {hovered2 ? (
          <div
            className="z-[100] px-[--39px] py-[--sy-35px] w-fit rounded-[--19px] bg-[#53ACFF4D]"
            style={{
              position: "absolute",
              top: `${position2.top}px`,
              left: `${position2.left}px`,
            }}
          >
            <h3 className="text-[--29px] font-bold mb-[--sy-25px]">
              Our Mission
            </h3>
            <p className=" mb-[--sy-20px] text-[--14px]">
              Welcome to our platform! Here, we strive to <br /> provide
              valuable information and services to our users.{" "}
            </p>
            <p className=" mb-[--sy-20px] text-[--14px]">
              Learn more about who we are, our mission, and <br /> how we aim to
              serve you better.{" "}
            </p>
            <p className=" mb-[--sy-20px] text-[--14px]">
              Thank you for choosing to explore our platform.
            </p>
            <span className=" border-8 h-0 border-l-transparent border-t-transparent border-b-transparent border-[#53ACFF4D] absolute -left-[--16px] border-solid"></span>
          </div>
        ) : null}
        {hovered3 ? (
          <div
            className="z-[100] px-[--39px] py-[--sy-35px] w-fit rounded-[--19px] bg-[#53ACFF4D]"
            style={{
              position: "absolute",
              top: `${position3.top}px`,
              left: `${position3.left}px`,
            }}
          >
            <h3 className="text-[--29px] font-bold mb-[--sy-25px]">
              Our Clients
            </h3>
            <p className=" mb-[--sy-20px] text-[--14px]">
              Welcome to our platform! Here, we strive to <br /> provide
              valuable information and services to our users.{" "}
            </p>
            <p className=" mb-[--sy-20px] text-[--14px]">
              Learn more about who we are, our mission, and <br /> how we aim to
              serve you better.{" "}
            </p>
            <p className=" mb-[--sy-20px] text-[--14px]">
              Thank you for choosing to explore our platform.
            </p>
            <span className=" border-8 h-0 border-l-transparent border-t-transparent border-b-transparent border-[#53ACFF4D] absolute -left-[--16px] border-solid"></span>
          </div>
        ) : null}

        <div className="aboutUs-card">
          <div className="aboutUs-card-body">
            <h4>
              About <span>Street Suite</span>
            </h4>

            <div className="collapse-item w-full mb-6">
              <div
                className="collapse-header"
                onClick={(e) => handleCollapse(e)}
              >
                <p>Who Are We?</p>
              </div>
              <div className="collapse-body block">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  ea voluptatum molestias odio exercitationem velit animi
                  blanditiis quia mollitia neque!
                </p>
              </div>
            </div>
            <div className="collapse-item w-full mb-6">
              <div
                className="collapse-header"
                onClick={(e) => handleCollapse(e)}
              >
                <p>Our Mission</p>
              </div>
              <div className="collapse-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  ea voluptatum molestias odio exercitationem velit animi
                  blanditiis quia mollitia neque!
                </p>
              </div>
            </div>
            <div className="collapse-item w-full !mb-[40px]">
              <div
                className="collapse-header"
                onClick={(e) => handleCollapse(e)}
              >
                <p>Our Clients</p>
              </div>
              <div className="collapse-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  ea voluptatum molestias odio exercitationem velit animi
                  blanditiis quia mollitia neque!
                </p>
              </div>
            </div>

            <div className="st-suit-logo flex items-center gap-3">
              <img src={logo} alt="" />
              <h5>ST Suite</h5>
            </div>
            <p>SaaS Service</p>
            <span>Lorem ipsum dolor sit amet</span>
            <h6 className="flex gap-4 items-center">
              18.00{" "}
              <svg
                width="15"
                height="23"
                viewBox="0 0 30 23"
                fill="rgba(17, 143, 75, 1)"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.4991 0.297293L1.49833 0.297295C1.22496 0.298161 0.957 0.374371 0.723293 0.51772C0.489586 0.661069 0.298981 0.866129 0.171997 1.11083C0.0450125 1.35553 -0.0135449 1.6306 0.00263018 1.90643C0.0188053 2.18227 0.109101 2.44842 0.263794 2.67624L13.7642 22.3871C14.3237 23.2043 15.6707 23.2043 16.2317 22.3871L29.7321 2.67624C29.8884 2.44889 29.98 2.18261 29.9971 1.90631C30.0141 1.63002 29.956 1.35428 29.8289 1.10907C29.7018 0.863849 29.5106 0.658526 29.2762 0.51541C29.0417 0.372293 28.773 0.296857 28.4991 0.297293Z"
                  fill="rgba(17, 143, 75, 1)"
                />
              </svg>
            </h6>
            <span>AT CLOSE (MAR 07 19:56) UTC - 5</span>

            <div className="key-stats-list mt-4">
              <p className="mb-3">Key Stats</p>
              <ul className="space-y-1">
                <li className="flex items-center justify-between">
                  <span>Next earnings report</span>
                  <span>in 55 Days</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Volume</span>
                  <span>1.18 M</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Average Volume (30D)</span>
                  <span>2.20M</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Market capitalization</span>
                  <span>52.02B</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
