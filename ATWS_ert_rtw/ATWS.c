/*
 * File: ATWS.c
 *
 * Code generated for Simulink model 'ATWS'.
 *
 * Model version                  : 1.26
 * Simulink Coder version         : 8.11 (R2016b) 25-Aug-2016
 * C/C++ source code generated on : Fri Feb 17 10:14:07 2017
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "ATWS.h"
#include "ATWS_private.h"

/* Named constants for Chart: '<S1>/Chart' */
#define ATWS_IN_AtwsCntr               ((uint8_T)1U)
#define ATWS_IN_AtwsDisSt              ((uint8_T)2U)
#define ATWS_IN_AtwsEnaSt              ((uint8_T)3U)
#define ATWS_IN_AtwsInit               ((uint8_T)4U)
#define ATWS_IN_AtwsLiCntrl            ((uint8_T)5U)
#define ATWS_IN_LiCntrInit             ((uint8_T)1U)
#define ATWS_IN_LiCycCntr              ((uint8_T)2U)
#define ATWS_IN_LiOff                  ((uint8_T)3U)
#define ATWS_IN_LiOn                   ((uint8_T)4U)
#define ATWS_IN_LiTerm                 ((uint8_T)5U)
#define ATWS_IN_NO_ACTIVE_CHILD        ((uint8_T)0U)

/* Block states (auto storage) */
DW_ATWS_T ATWS_DW;

/* Model step function */
void ATWS_step(void)
{
    /* Chart: '<S1>/Chart' */
    /* Gateway: ATWS/Chart */
    /* During: ATWS/Chart */
    /* Gateway: ATWS/Chart */
    /* During: ATWS/Chart */
    switch (ATWS_DW.bitsForTID0.is_c3_ATWS)
    {
      case ATWS_IN_AtwsCntr:
        /* During 'AtwsCntr': '<S2>:227' */
        /* '<S2>:227:1' AtwsCnt = AtwsCnt + 1; */
        ATWS_DW.AtwsCnt++;
        break;

      case ATWS_IN_AtwsDisSt:
        /* During 'AtwsDisSt': '<S2>:232' */
        /* '<S2>:232:1' AtwsCnt = 0; */
        ATWS_DW.AtwsCnt = 0.0;

        /* '<S2>:232:1' AtwsSt = 0; */
        ATWS_DW.AtwsSt = 0.0;

        /* '<S2>:232:1' LeLiCyc = 2; */
        ATWS_DW.LeLiCyc = 2.0;

        /* '<S2>:232:1' HazardLiOn = 1; */
        break;

      case ATWS_IN_AtwsEnaSt:
        /* During 'AtwsEnaSt': '<S2>:230' */
        /* '<S2>:230:1' AtwsCnt = 0; */
        ATWS_DW.AtwsCnt = 0.0;

        /* '<S2>:230:1' AtwsSt = 1; */
        ATWS_DW.AtwsSt = 1.0;

        /* '<S2>:230:1' LeLiCyc = 1; */
        ATWS_DW.LeLiCyc = 1.0;

        /* '<S2>:230:1' HazardLiOn = 1; */
        break;

      case ATWS_IN_AtwsInit:
        /* During 'AtwsInit': '<S2>:225' */
        /* '<S2>:225:1' AtwsCnt = 0; */
        ATWS_DW.AtwsCnt = 0.0;

        /* AtwsSt = 0; */
        /* '<S2>:225:1' BlkngCnt = 0; */
        ATWS_DW.BlkngCnt = 0.0;

        /* '<S2>:225:1' BcmLeLiSt = 0; */
        ATWS_DW.BcmLeLiSt = 0.0;

        /* '<S2>:225:3' CycCnt = 0; */
        ATWS_DW.CycCnt = 0.0;

        /* '<S2>:225:3' LeLiCyc = 0; */
        ATWS_DW.LeLiCyc = 0.0;
        break;

      default:
        /* During 'AtwsLiCntrl': '<S2>:266' */
        switch (ATWS_DW.bitsForTID0.is_AtwsLiCntrl)
        {
          case ATWS_IN_LiCntrInit:
            /* During 'LiCntrInit': '<S2>:310' */
            /* '<S2>:310:1' BlkngCnt = 0; */
            ATWS_DW.BlkngCnt = 0.0;
            break;

          case ATWS_IN_LiCycCntr:
            /* During 'LiCycCntr': '<S2>:307' */
            /* '<S2>:307:1' CycCnt = CycCnt + 1; */
            ATWS_DW.CycCnt++;
            break;

          case ATWS_IN_LiOff:
            /* During 'LiOff': '<S2>:273' */
            /* '<S2>:273:1' BlkngCnt = BlkngCnt+1; */
            ATWS_DW.BlkngCnt++;

            /* '<S2>:273:1' HazardLiOn = 0; */
            break;

          case ATWS_IN_LiOn:
            /* During 'LiOn': '<S2>:277' */
            /* '<S2>:277:1' BlkngCnt = BlkngCnt+1; */
            ATWS_DW.BlkngCnt++;

            /* '<S2>:277:1' HazardLiOn = 1; */
            break;

          default:
            /* During 'LiTerm': '<S2>:297' */
            /* '<S2>:297:1' BcmLeLiSt = 1; */
            ATWS_DW.BcmLeLiSt = 1.0;

            /* '<S2>:297:1' CycCnt = 0; */
            ATWS_DW.CycCnt = 0.0;
            break;
        }
        break;
    }

    switch (ATWS_DW.bitsForTID0.is_c3_ATWS)
    {
      case ATWS_IN_AtwsCntr:
        /* During 'AtwsCntr': '<S2>:227' */
        /* '<S2>:229:1' sf_internal_predicateOutput = ... */
        /* '<S2>:229:1' CentralUnlockSw == 0; */
        /* Transition: '<S2>:229' */
        ATWS_DW.bitsForTID0.is_c3_ATWS = ATWS_IN_AtwsInit;
        break;

      case ATWS_IN_AtwsDisSt:
        /* During 'AtwsDisSt': '<S2>:232' */
        /* Transition: '<S2>:283' */
        ATWS_DW.bitsForTID0.is_c3_ATWS = ATWS_IN_AtwsLiCntrl;

        /* Entry Internal 'AtwsLiCntrl': '<S2>:266' */
        /* Transition: '<S2>:279' */
        ATWS_DW.bitsForTID0.is_AtwsLiCntrl = ATWS_IN_LiOn;
        break;

      case ATWS_IN_AtwsEnaSt:
        /* During 'AtwsEnaSt': '<S2>:230' */
        /* Transition: '<S2>:309' */
        ATWS_DW.bitsForTID0.is_c3_ATWS = ATWS_IN_AtwsLiCntrl;

        /* Entry Internal 'AtwsLiCntrl': '<S2>:266' */
        /* Transition: '<S2>:279' */
        ATWS_DW.bitsForTID0.is_AtwsLiCntrl = ATWS_IN_LiOn;
        break;

      case ATWS_IN_AtwsInit:
        /* During 'AtwsInit': '<S2>:225' */
        /* '<S2>:228:1' sf_internal_predicateOutput = ... */
        /* '<S2>:228:1' CentralUnlockSw == 1; */
        break;

      default:
        /* During 'AtwsLiCntrl': '<S2>:266' */
        /* Transition: '<S2>:284' */
        /* '<S2>:242:1' sf_internal_predicateOutput = ... */
        /* '<S2>:242:1' BcmLeLiSt == 1; */
        if (ATWS_DW.BcmLeLiSt == 1.0)
        {
            /* Transition: '<S2>:242' */
            /* Transition: '<S2>:237' */
            /* Exit Internal 'AtwsLiCntrl': '<S2>:266' */
            ATWS_DW.bitsForTID0.is_AtwsLiCntrl = ATWS_IN_NO_ACTIVE_CHILD;
            ATWS_DW.bitsForTID0.is_c3_ATWS = ATWS_IN_AtwsInit;
        }
        else
        {
            switch (ATWS_DW.bitsForTID0.is_AtwsLiCntrl)
            {
              case ATWS_IN_LiCntrInit:
                /* During 'LiCntrInit': '<S2>:310' */
                /* Transition: '<S2>:312' */
                /* Transition: '<S2>:306' */
                ATWS_DW.bitsForTID0.is_AtwsLiCntrl = ATWS_IN_LiOn;
                break;

              case ATWS_IN_LiCycCntr:
                /* During 'LiCycCntr': '<S2>:307' */
                /* Transition: '<S2>:308' */
                /* '<S2>:276:1' sf_internal_predicateOutput = ... */
                /* '<S2>:276:1' (AtwsSt == 0) && (CycCnt < LeLiCyc); */
                if ((ATWS_DW.AtwsSt == 0.0) && (ATWS_DW.CycCnt < ATWS_DW.LeLiCyc))
                {
                    /* Transition: '<S2>:276' */
                    /* Transition: '<S2>:311' */
                    ATWS_DW.bitsForTID0.is_AtwsLiCntrl = ATWS_IN_LiCntrInit;
                }
                else
                {
                    /* Transition: '<S2>:298' */
                    ATWS_DW.bitsForTID0.is_AtwsLiCntrl = ATWS_IN_LiTerm;
                }
                break;

              case ATWS_IN_LiOff:
                /* During 'LiOff': '<S2>:273' */
                /* '<S2>:268:1' sf_internal_predicateOutput = ... */
                /* '<S2>:268:1' BlkngCnt >= (M_TIME_800MS-1); */
                if (ATWS_DW.BlkngCnt >= 79.0)
                {
                    /* Transition: '<S2>:268' */
                    ATWS_DW.bitsForTID0.is_AtwsLiCntrl = ATWS_IN_LiCycCntr;
                }
                break;

              case ATWS_IN_LiOn:
                /* During 'LiOn': '<S2>:277' */
                /* '<S2>:271:1' sf_internal_predicateOutput = ... */
                /* '<S2>:271:1' BlkngCnt >= (M_TIME_400MS-1); */
                if (ATWS_DW.BlkngCnt >= 39.0)
                {
                    /* Transition: '<S2>:271' */
                    ATWS_DW.bitsForTID0.is_AtwsLiCntrl = ATWS_IN_LiOff;
                }
                break;

              default:
                /* During 'LiTerm': '<S2>:297' */
                /* Transition: '<S2>:299' */
                break;
            }
        }
        break;
    }

    /* End of Chart: '<S1>/Chart' */
}

/* Model initialize function */
void ATWS_initialize(void)
{
    /* Registration code */

    /* states (dwork) */
    (void) memset((void *)&ATWS_DW, 0,
                  sizeof(DW_ATWS_T));

    /* SystemInitialize for Chart: '<S1>/Chart' */
    ATWS_DW.bitsForTID0.is_AtwsLiCntrl = ATWS_IN_NO_ACTIVE_CHILD;
    ATWS_DW.AtwsCnt = 0.0;
    ATWS_DW.CycCnt = 0.0;
    ATWS_DW.AtwsSt = 0.0;

    /* Entry: ATWS/Chart */
    /* Entry Internal: ATWS/Chart */
    /* Transition: '<S2>:226' */
    ATWS_DW.bitsForTID0.is_c3_ATWS = ATWS_IN_AtwsInit;
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
