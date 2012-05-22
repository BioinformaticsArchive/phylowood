/**
 * Originally from http://www2.warwick.ac.uk/fac/sci/moac/currentstudents/peter_cock/r/matrix_contour/
 */
var data = [
  [
    0.4, 
    0.4, 
    0.7, 
    -1.0, 
    -0.1, 
    0.6, 
    -0.4, 
    0.6, 
    -0.4, 
    1.3, 
    0.7, 
    -0.4, 
    1.1, 
    1.3, 
    0.6, 
    0.1, 
    -0.0, 
    -0.8, 
    -0.8, 
    -1.0
  ], 
  [
    0.4, 
    -0.4, 
    0.4, 
    -1.2, 
    -0.7, 
    0.4, 
    -0.9, 
    0.5, 
    -0.9, 
    1.2, 
    0.5, 
    -1.0, 
    1.3, 
    1.1, 
    0.5, 
    -0.0, 
    -0.1, 
    -1.2, 
    -1.0, 
    -0.9
  ], 
  [
    0.7, 
    0.4, 
    0.1, 
    -1.2, 
    -0.2, 
    0.5, 
    -0.6, 
    0.6, 
    -0.2, 
    0.9, 
    0.6, 
    -0.5, 
    1.1, 
    0.8, 
    0.6, 
    0.1, 
    -0.4, 
    -0.9, 
    -0.7, 
    -0.8
  ], 
  [
    -1.0, 
    -1.2, 
    -1.2, 
    -4.4, 
    -1.9, 
    -0.8, 
    -2.2, 
    -1.0, 
    -2.2, 
    0.0, 
    -0.3, 
    -2.0, 
    -0.2, 
    0.2, 
    -0.8, 
    -1.6, 
    -1.9, 
    -2.4, 
    -2.3, 
    -2.6
  ], 
  [
    -0.1, 
    -0.7, 
    -0.2, 
    -1.9, 
    -2.0, 
    -0.5, 
    -1.9, 
    -0.3, 
    -1.7, 
    0.4, 
    -0.2, 
    -1.9, 
    0.3, 
    0.4, 
    -0.3, 
    -0.8, 
    -0.9, 
    -2.1, 
    -1.8, 
    -2.0
  ], 
  [
    0.6, 
    0.4, 
    0.5, 
    -0.8, 
    -0.5, 
    -0.1, 
    -0.8, 
    0.6, 
    -0.5, 
    1.0, 
    0.5, 
    -0.7, 
    0.8, 
    1.0, 
    0.5, 
    0.1, 
    -0.3, 
    -0.9, 
    -0.7, 
    -1.1
  ], 
  [
    -0.4, 
    -0.9, 
    -0.6, 
    -2.2, 
    -1.9, 
    -0.8, 
    -2.7, 
    -0.6, 
    -2.0, 
    0.3, 
    -0.3, 
    -2.3, 
    -0.0, 
    -0.0, 
    -0.6, 
    -1.1, 
    -1.3, 
    -2.4, 
    -2.0, 
    -2.2
  ], 
  [
    0.6, 
    0.5, 
    0.6, 
    -1.0, 
    -0.3, 
    0.6, 
    -0.6, 
    0.1, 
    -0.8, 
    1.3, 
    0.8, 
    -0.8, 
    1.1, 
    1.3, 
    0.4, 
    0.1, 
    0.1, 
    -0.8, 
    -1.0, 
    -1.0
  ], 
  [
    -0.4, 
    -0.9, 
    -0.2, 
    -2.2, 
    -1.7, 
    -0.5, 
    -2.0, 
    -0.8, 
    -2.9, 
    0.3, 
    -0.4, 
    -2.2, 
    -0.0, 
    -0.0, 
    -0.7, 
    -0.7, 
    -1.3, 
    -2.4, 
    -2.1, 
    -2.6
  ], 
  [
    1.3, 
    1.2, 
    0.9, 
    0.0, 
    0.4, 
    1.0, 
    0.3, 
    1.3, 
    0.3, 
    1.1, 
    1.0, 
    0.2, 
    0.7, 
    1.9, 
    0.9, 
    -0.2, 
    0.3, 
    0.1, 
    -0.4, 
    -0.2
  ], 
  [
    0.7, 
    0.5, 
    0.6, 
    -0.3, 
    -0.2, 
    0.5, 
    -0.3, 
    0.8, 
    -0.4, 
    1.0, 
    0.3, 
    -0.3, 
    1.0, 
    1.1, 
    0.6, 
    0.1, 
    0.3, 
    -0.7, 
    -0.5, 
    -0.6
  ], 
  [
    -0.4, 
    -1.0, 
    -0.5, 
    -2.0, 
    -1.9, 
    -0.7, 
    -2.3, 
    -0.8, 
    -2.2, 
    0.2, 
    -0.3, 
    -2.7, 
    0.0, 
    -0.0, 
    -0.6, 
    -1.0, 
    -1.1, 
    -2.3, 
    -2.1, 
    -2.4
  ], 
  [
    1.1, 
    1.3, 
    1.1, 
    -0.2, 
    0.3, 
    0.8, 
    -0.0, 
    1.1, 
    -0.0, 
    0.7, 
    1.0, 
    0.0, 
    1.6, 
    0.8, 
    1.0, 
    0.8, 
    0.7, 
    -0.2, 
    -0.2, 
    -0.2
  ], 
  [
    1.3, 
    1.1, 
    0.8, 
    0.2, 
    0.4, 
    1.0, 
    -0.0, 
    1.3, 
    -0.0, 
    1.9, 
    1.1, 
    -0.0, 
    0.8, 
    1.2, 
    1.1, 
    0.0, 
    0.2, 
    -0.1, 
    -0.4, 
    0.0
  ], 
  [
    0.6, 
    0.5, 
    0.6, 
    -0.8, 
    -0.3, 
    0.5, 
    -0.6, 
    0.4, 
    -0.7, 
    0.9, 
    0.6, 
    -0.6, 
    1.0, 
    1.1, 
    -0.2, 
    0.1, 
    -0.0, 
    -0.9, 
    -0.6, 
    -1.2
  ], 
  [
    0.1, 
    -0.0, 
    0.1, 
    -1.6, 
    -0.8, 
    0.1, 
    -1.1, 
    0.1, 
    -0.7, 
    -0.2, 
    0.1, 
    -1.0, 
    0.8, 
    0.0, 
    0.1, 
    -0.6, 
    -0.4, 
    -1.2, 
    -1.3, 
    -1.4
  ], 
  [
    -0.0, 
    -0.1, 
    -0.4, 
    -1.9, 
    -0.9, 
    -0.3, 
    -1.3, 
    0.1, 
    -1.3, 
    0.3, 
    0.3, 
    -1.1, 
    0.7, 
    0.2, 
    -0.0, 
    -0.4, 
    -1.3, 
    -1.4, 
    -1.6, 
    -1.9
  ], 
  [
    -0.8, 
    -1.2, 
    -0.9, 
    -2.4, 
    -2.1, 
    -0.9, 
    -2.4, 
    -0.8, 
    -2.4, 
    0.1, 
    -0.7, 
    -2.3, 
    -0.2, 
    -0.1, 
    -0.9, 
    -1.2, 
    -1.4, 
    -3.0, 
    -2.3, 
    -2.5
  ], 
  [
    -0.8, 
    -1.0, 
    -0.7, 
    -2.3, 
    -1.8, 
    -0.7, 
    -2.0, 
    -1.0, 
    -2.1, 
    -0.4, 
    -0.5, 
    -2.1, 
    -0.2, 
    -0.4, 
    -0.6, 
    -1.3, 
    -1.6, 
    -2.3, 
    -2.3, 
    -2.4
  ], 
  [
    -1.0, 
    -0.9, 
    -0.8, 
    -2.6, 
    -2.0, 
    -1.1, 
    -2.2, 
    -1.0, 
    -2.6, 
    -0.2, 
    -0.6, 
    -2.4, 
    -0.2, 
    0.0, 
    -1.2, 
    -1.4, 
    -1.9, 
    -2.5, 
    -2.4, 
    -3.3
  ]
]
