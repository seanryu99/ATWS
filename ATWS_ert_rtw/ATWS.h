/*
 * File: ATWS.h
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

#ifndef RTW_HEADER_ATWS_h_
#define RTW_HEADER_ATWS_h_
#include <string.h>
#ifndef ATWS_COMMON_INCLUDES_
# define ATWS_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* ATWS_COMMON_INCLUDES_ */

#include "ATWS_types.h"

/* Macros for accessing real-time model data structure */

/* Block states (auto storage) for system '<Root>' */
typedef struct
{
    real_T AtwsCnt;                    /* '<S1>/Chart' */
    real_T BcmLeLiSt;                  /* '<S1>/Chart' */
    real_T BlkngCnt;                   /* '<S1>/Chart' */
    real_T LeLiCyc;                    /* '<S1>/Chart' */
    real_T CycCnt;                     /* '<S1>/Chart' */
    real_T AtwsSt;                     /* '<S1>/Chart' */
    struct
    {
        uint_T is_c3_ATWS:3;           /* '<S1>/Chart' */
        uint_T is_AtwsLiCntrl:3;       /* '<S1>/Chart' */
    }
    bitsForTID0;
}
DW_ATWS_T;

/* Block states (auto storage) */
extern DW_ATWS_T ATWS_DW;

/* Model entry point functions */
extern void ATWS_initialize(void);
extern void ATWS_step(void);

/*-
 * These blocks were eliminated from the model due to optimizations:
 *
 * Block '<Root>/Scope' : Unused code path elimination
 * Block '<Root>/Scope1' : Unused code path elimination
 */

/*-
 * The generated code includes comments that allow you to trace directly
 * back to the appropriate location in the model.  The basic format
 * is <system>/block_name, where system is the system number (uniquely
 * assigned by Simulink) and block_name is the name of the block.
 *
 * Use the MATLAB hilite_system command to trace the generated code back
 * to the model.  For example,
 *
 * hilite_system('<S3>')    - opens system 3
 * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
 *
 * Here is the system hierarchy for this model
 *
 * '<Root>' : 'ATWS'
 * '<S1>'   : 'ATWS/ATWS'
 * '<S2>'   : 'ATWS/ATWS/Chart'
 */
#endif                                 /* RTW_HEADER_ATWS_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
