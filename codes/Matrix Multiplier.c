#include <stdio.h>

int main() {
  int matriks1[10][10], matriks2[10][10], hasil[10][10];
  int i, j, k, m, n, p, q, jumlah = 0;
  printf("Enter the number of rows of the first matrix: ");
  scanf("%d",&m);
  printf("Enter the number of columns for the first matrix: ");
  scanf("%d",&n);

  printf("Enter the number of rows of the second matrix: ");
  scanf("%d",&p);
  printf("Enter the number of columns for the second matrix: ");
  scanf("%d",&q);

  if(n != p){
    printf("Matrices cannot be multiplied by each other.\n");
  } else {

    printf("Enter the first matrix element: \n");
    for(i = 0; i < m; i++){
      for(j = 0; j < n; j++){
        scanf("%d", &matriks1[i][j]);
      }
    }

    printf("Enter the second matrix element: \n");
    for(i = 0; i < p; i++){
      for(j = 0; j < q; j++){
        scanf("%d", &matriks2[i][j]);
      }
    }

    for(i = 0; i < m; i++){
      for(j = 0; j < q; j++){
        for(k = 0; k < p; k++){
          jumlah = jumlah + matriks1[i][k] * matriks2[k][j];
        }
        hasil[i][j] = jumlah;
        jumlah = 0;
      }
    }

    printf("Result: \n");
    for(i = 0; i < m; i++){
      for(j = 0; j < n; j++){
        printf("%d\t", hasil[i][j]);
      }
      printf("\n");
    }

  }
  
  return 0;
}